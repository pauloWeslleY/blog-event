import { IUserRepo, UserRepo } from '@/data/factories/firestore'

export namespace UserFactory {
  export class Info {
    add(params: IUserRepo.Model): IUserRepo {
      return new UserRepo(params)
    }
  }
}
