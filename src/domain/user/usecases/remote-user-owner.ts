import { doc, getDoc } from 'firebase/firestore'
import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { IUserOwner } from '@/data/usecases'
import { User } from '@/domain/user'

export class RemoteUserOwner implements IUserOwner {
  constructor(private readonly database: IFirebase) {}

  async getUserOwner(ownerId: string): Promise<User> {
    const response = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.USERS, ownerId),
    )

    return response.data() as User
  }
}
