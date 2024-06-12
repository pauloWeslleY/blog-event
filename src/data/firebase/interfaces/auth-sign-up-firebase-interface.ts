/* eslint-disable prettier/prettier */
import { IFirebaseAuth } from './firebase-auth'

export namespace ISignUp {
  export type Params = IFirebaseAuth.Params

  export type Model<T> = IFirebaseAuth.Model<T>
}

export interface ISignUp<T, R> {
  authSignUp(auth: T, params: ISignUp.Params): Promise<R>
}


