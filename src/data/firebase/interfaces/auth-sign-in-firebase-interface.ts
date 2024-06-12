import { IFirebaseAuth } from './firebase-auth'

export namespace ISignIn {
  export type Params = IFirebaseAuth.Params

  export type Model<T> = IFirebaseAuth.Model<T>
}

export interface ISignIn<T, R> {
  authSignIn(auth: T, params: ISignIn.Params): Promise<R>
}
