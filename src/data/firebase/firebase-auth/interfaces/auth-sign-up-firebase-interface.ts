import { IFirebaseAuth } from '@/data/firebase'

export namespace ISignUp {
  export type Params = IFirebaseAuth.Params

  export type Model<T> = IFirebaseAuth.Model<T>
}

export interface ISignUp<R> {
  authSignUp(params: ISignUp.Params): Promise<R>
}
