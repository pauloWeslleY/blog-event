import { IFirebaseAuth } from '@/data/firebase'

export namespace ISignIn {
  export type Params = IFirebaseAuth.Params

  export type Model<T> = IFirebaseAuth.Model<T>
}

export interface ISignIn<R> {
  authSignIn(params: ISignIn.Params): Promise<R>
}
