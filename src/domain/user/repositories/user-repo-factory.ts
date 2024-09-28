import { IFirebase } from '@/infra/firebase'
import { IUserRepository, UserRepository } from './user-repository'

export class UserRepoFactory {
  static executeCreate(database: IFirebase): IUserRepository {
    return new UserRepository({ database })
  }
}
