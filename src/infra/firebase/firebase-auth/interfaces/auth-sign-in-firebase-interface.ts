import { IFirebaseAuth } from '@/infra/firebase'

export namespace ISignIn {
  export type Params = IFirebaseAuth.Params

  export type Model<T> = IFirebaseAuth.Model<T>
}

export interface ISignIn<R> {
  signIn(params: ISignIn.Params): Promise<ISignIn.Model<R>>
}
