import { EventModel } from '@/domain/models'

export namespace IEventDetailRepo {
  export type Params = EventModel

  export type Model = Omit<EventModel, 'createdAt'> & {
    createdAt: string
  }
}

export interface IEventDetailRepo {
  eventDetail: IEventDetailRepo.Model
}
