import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { COLLECTIONS, IFirebase, IUserList } from '@/data/firebase'

export class RemoteUserList implements IUserList {
  private userList: IUserList.Model[] = []

  // eslint-disable-next-line prettier/prettier
  constructor(private database: IFirebase) { }

  async getUserList(): Promise<IUserList.Model[]> {
    const queryEvent = query(
      this.database.collection(COLLECTIONS.USERS),
      where('email', '!=', true),
      orderBy('email', 'asc'),
    )

    const userListQuery = await getDocs(queryEvent)

    userListQuery.forEach((doc) => {
      const data = { ...doc.data(), id: doc.id } as IUserList.Model
      this.userList.push(data)
    })

    console.log(this.userList)

    return this.userList
  }
}
