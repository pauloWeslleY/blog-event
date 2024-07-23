import { updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { IFirebase, IUser } from '@/data/firebase'
import { UserFactory } from '@/data/factories'
import { COLLECTIONS } from '@/data/firebase/collections'

export class RemoteUser implements IUser {
  private userFactory = new UserFactory.Info()
  private token: string = ''

  constructor(
    private database: IFirebase,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async create({ data, username }: IUser.Params): Promise<IUser.Model> {
    const { user } = this.userFactory.add({
      id: data.user.uid,
      username,
      email: data.user.email || '',
    })

    const userRef = doc(this.database.collection(COLLECTIONS.USERS), user.id)

    await data.user.getIdToken().then((token) => {
      this.token = token
    })

    await updateProfile(data.user, {
      displayName: user.username,
    })

    await setDoc(userRef, {
      username: user.username,
      email: user.email,
    })

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: this.token,
    }
  }
}
