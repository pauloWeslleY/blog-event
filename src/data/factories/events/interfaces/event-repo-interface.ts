import { EventModel } from '@/domain/models'

export namespace IEventRepo {
  export type Model = Omit<EventModel, 'id'>
}

export interface IEventRepo {
  event: IEventRepo.Model
}
