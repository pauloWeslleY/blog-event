export namespace IEventUpdatedView {
  export type Params = {
    views: number
  }
}

export interface IEventUpdatedView {
  viewUpdatedEvent(params: IEventUpdatedView.Params): Promise<void>
}
