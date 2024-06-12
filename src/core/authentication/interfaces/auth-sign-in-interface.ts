import { UserCredential } from 'firebase/auth'
import { ISignIn } from '@/data/firebase'

export namespace IAuthSignIn {
  export type Params = {
    email: string
    password: string
  }

  export type Model = {
    data: ISignIn.Model<UserCredential>
  }
}

export interface IAuthSignIn {
  signIn(params: IAuthSignIn.Params): Promise<IAuthSignIn.Model>
}
