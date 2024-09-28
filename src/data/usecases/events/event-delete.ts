export namespace IDeleteEvent {
  export type Params = {
    eventId: string
  }
}

export interface IDeleteEvent {
  deleteEvent(params: IDeleteEvent.Params): Promise<void>
}
