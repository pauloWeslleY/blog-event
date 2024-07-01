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
