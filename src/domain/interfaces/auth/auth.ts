import { ISignIn } from '@/data/firebase'
import { AccountModel } from '@/domain/models'

export namespace IAuthentication {
  export type Params = ISignIn.Params

  export type Model = AccountModel
}

export interface IAuthentication {
  authentication(params: IAuthentication.Params): Promise<IAuthentication.Model>
}
