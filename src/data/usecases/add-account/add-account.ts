import { FirebaseError } from 'firebase/app'
import { FirebaseResponse, ISignUp } from '@/infra/firebase'
import { AccountModel } from '@/data/models'

export namespace IAddAccount {
  export type Params = ISignUp.Params & {
    username: string
  }

  export type Model = FirebaseResponse<AccountModel> & {
    hasError: FirebaseError | null | string
  }
}

export interface IAddAccount {
  register(params: IAddAccount.Params): Promise<IAddAccount.Model>
}
