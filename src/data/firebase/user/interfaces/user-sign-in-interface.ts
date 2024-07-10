import { AccountModel } from '@/domain/models'
import { ISignIn } from '@/data/firebase'

export namespace IUserSignIn {
  export type Params = ISignIn.Params

  export type Model = string | string | AccountModel
}

export interface IUserSignIn {
  login(params: IUserSignIn.Params): Promise<IUserSignIn.Model>
}
