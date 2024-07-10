import { doc, getDoc } from 'firebase/firestore'
import { COLLECTIONS, IFirebase, IUserInfo } from '@/data/firebase'
import { UserFactory } from '@/data/factories'

export class RemoteUserInfo implements IUserInfo {
  private data = new UserFactory.User()
  // eslint-disable-next-line prettier/prettier
  constructor(private database: IFirebase) { }

  async getUserInfo(uid: string): Promise<IUserInfo.Model> {
    const response = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.USERS, uid),
    )
    const user = response.data() as IUserInfo.Model
    const data = this.data.add({ ...user, id: uid }).user

    return data
  }
}
