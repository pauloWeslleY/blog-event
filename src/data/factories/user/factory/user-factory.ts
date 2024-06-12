import { IUserRepo, UserRepo } from '@/data/factories/user'

export namespace UserFactory {
  export class User {
    add(params: IUserRepo.Model): IUserRepo {
      return new UserRepo(params)
    }
  }
}
