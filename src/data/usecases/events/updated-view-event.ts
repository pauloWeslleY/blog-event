export namespace IUpdatedViewEvent {
  export type Params = {
    eventId: string
    views: number
  }
}

export interface IUpdatedViewEvent {
  updatedViewEvent(params: IUpdatedViewEvent.Params): Promise<void>
}
