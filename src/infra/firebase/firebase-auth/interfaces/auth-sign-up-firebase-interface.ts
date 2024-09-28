import { IFirebaseAuth } from '@/infra/firebase'

export namespace ISignUp {
  export type Params = IFirebaseAuth.Params

  export type Model<T> = IFirebaseAuth.Model<T>
}

export interface ISignUp<R> {
  signUp(params: ISignUp.Params): Promise<ISignUp.Model<R>>
}
