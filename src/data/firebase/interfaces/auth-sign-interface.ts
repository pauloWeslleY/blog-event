/* eslint-disable prettier/prettier */
import { Auth, UserCredential } from 'firebase/auth'
import { ISignIn, ISignOut, ISignUp } from '@/data/firebase'

export namespace IAuth {
  export interface SignUpAuth
    extends ISignUp<Auth, ISignUp.Model<UserCredential>> { }

  export interface SignInAuth
    extends ISignIn<Auth, ISignIn.Model<UserCredential>> { }

  export interface SignOutAuth extends ISignOut<Auth> { }
}
