import { UserCredential } from 'firebase/auth'
import { IAuthSignIn } from '@/core/authentication'

export namespace IUserSignIn {
  export type Params = IAuthSignIn.Params

  export type Model = string | string | UserCredential
}

export interface IUserSignIn {
  login(params: IUserSignIn.Params): Promise<IUserSignIn.Model>
}
