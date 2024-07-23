declare interface IUpdated<P, R> {
  updated(params: P): Promise<R>
}

export as namespace IUpdated
