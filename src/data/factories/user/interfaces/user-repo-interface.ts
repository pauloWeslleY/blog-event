import { AccountModel } from '@/core/authentication'

export namespace IUserRepo {
  export type Model = AccountModel
}

export interface IUserRepo {
  user: IUserRepo.Model
}
