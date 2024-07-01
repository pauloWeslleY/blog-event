import { updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { IUser } from '@/core/user'
import { COLLECTIONS, IFirebase } from '@/data/firebase'
import { UserFactory } from '@/data/factories'

export class RemoteUser implements IUser {
  private data = new UserFactory.User()

  constructor(
    private database: IFirebase,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async create({ data, username }: IUser.Params): Promise<IUser.Model> {
    const { user } = this.data.add({
      id: data.user.uid,
      username,
      email: data.user.email || '',
    })

    const userRef = doc(
      this.database.getCollection(COLLECTIONS.USERS),
      data.user.uid,
    )

    data.user.getIdToken().then((token) => {
      user.accessToken = token
    })

    await updateProfile(data.user, {
      displayName: user.username,
    })

    await setDoc(userRef, {
      username: user.username,
      email: user.email,
      accessToken: user.accessToken,
    })

    return user
  }
}
