import { EventModel } from '@/data/models'

export namespace IEventDetail {
  export type Params = {
    eventId: string
  }

  export type Model = EventModel
}

export interface IEventDetail {
  getDetailEvent(params: IEventDetail.Params): Promise<IEventDetail.Model>
}
