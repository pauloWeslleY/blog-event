export namespace IFirebaseAuth {
  export type Params = {
    email: string
    password: string
  }

  export type Error = {
    errorCode: string
    errorMessage: string
  }

  export type Model<T> = {
    user: T | null
    error: Error | null
  }
}

export interface IFirebaseAuth<T, R> {
  signUp(auth: R, params: IFirebaseAuth.Params): Promise<T>
  signIn(auth: R, params: IFirebaseAuth.Params): Promise<T>
  signOut(auth: R): Promise<void>
}
