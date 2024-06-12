import { doc, getDoc } from 'firebase/firestore'
import { IUserLogged } from '@/core/user'
import { COLLECTIONS, IFirebase } from '@/data/firebase'
import { UserFactory } from '@/data/factories'

export class RemoteUserLogged implements IUserLogged {
  private data = new UserFactory.User()
  // eslint-disable-next-line prettier/prettier
  constructor(private database: IFirebase) { }

  async getUserLogged(uid: string): Promise<IUserLogged.Model> {
    const response = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.USERS, uid),
    )
    const user = response.data() as IUserLogged.Model
    const data = this.data.add({ ...user, id: uid }).user

    return data
  }
}
