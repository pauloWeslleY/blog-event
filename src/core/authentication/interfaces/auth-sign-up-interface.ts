import { UserCredential } from 'firebase/auth'
import { ISignUp } from '@/data/firebase'

export namespace IAuthSignUp {
  export type Params = {
    username: string
    email: string
    password: string
  }

  export type Model = {
    data: ISignUp.Model<UserCredential>
    username: string
  }
}

export interface IAuthSignUp {
  signUp(params: IAuthSignUp.Params): Promise<IAuthSignUp.Model>
}
