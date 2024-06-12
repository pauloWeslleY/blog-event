import { IUserRepo } from '@/data/factories/user'

export class UserRepo implements IUserRepo {
  public user: IUserRepo.Model

  constructor(props: IUserRepo.Model) {
    this.user = props
  }
}
