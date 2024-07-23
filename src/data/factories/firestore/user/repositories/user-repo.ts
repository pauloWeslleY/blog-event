import { IUserRepo } from '@/data/factories/firestore'

export class UserRepo implements IUserRepo {
  public user: IUserRepo.Model

  constructor(props: IUserRepo.Model) {
    this.user = props
  }
}
