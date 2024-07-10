/* eslint-disable prettier/prettier */
import { UserCredential } from 'firebase/auth'
import { ISignIn, ISignUp } from '@/data/firebase'

export namespace IAuth {
  export interface SignUpAuth
    extends ISignUp<ISignUp.Model<UserCredential>> { }

  export interface SignInAuth
    extends ISignIn<ISignIn.Model<UserCredential>> { }
}
