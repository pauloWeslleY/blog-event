declare interface IRemove<R> {
  remove(): Promise<R>
}

export as namespace IRemove
