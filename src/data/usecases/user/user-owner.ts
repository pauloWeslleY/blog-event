import { User } from '@/domain/user'

export interface IUserOwner {
  getUserOwner(ownerId: string): Promise<User>
}
