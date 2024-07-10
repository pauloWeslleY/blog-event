import { IUserSignUp } from '@/data/firebase'
import { AccountModel } from '@/domain/models'

export namespace IAddAccount {
  export type Params = IUserSignUp.Params

  export type Model = AccountModel
}
