import { AccountModel } from '@/data/models'
import { FirebaseResponse, ISignIn } from '@/infra/firebase'

export namespace IAuthentication {
  export type Params = ISignIn.Params

  export type Model = FirebaseResponse<AccountModel>
}

export interface IAuthentication {
  authentication(params: IAuthentication.Params): Promise<IAuthentication.Model>
}
