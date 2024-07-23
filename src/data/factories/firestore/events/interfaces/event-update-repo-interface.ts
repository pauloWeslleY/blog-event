import { Timestamp } from 'firebase/firestore'
import { EventModel } from '@/domain/models'

export namespace IEventUpdateRepo {
  export type Params = Omit<EventModel, 'createdAt' | 'views'> & {
    createdAt: string
    updatedAt: Timestamp | Date
  }

  export type Model = Omit<EventModel, 'views' | 'id'> & {
    updatedAt: Timestamp | Date
  }
}

export interface IEventUpdateRepo {
  eventUpdate: IEventUpdateRepo.Model
}
