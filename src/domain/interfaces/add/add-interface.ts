export interface IAdd<P, R> {
  add(params: P): Promise<R>
}
