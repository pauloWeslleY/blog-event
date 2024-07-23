declare interface IAdd<P, R> {
  add(params: P): Promise<R>
}

export as namespace IAdd
