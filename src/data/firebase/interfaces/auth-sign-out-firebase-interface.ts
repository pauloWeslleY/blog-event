export interface ISignOut<P> {
  signOut(auth: P): Promise<void>
}
