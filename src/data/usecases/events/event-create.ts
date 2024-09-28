import { EventModel } from '@/data/models'
import { FirebaseResponse } from '@/infra/firebase'

export namespace ICreateEvent {
  export type Params = {
    title: string
    description: string
    hours: string
    date: string
    photoUrl: string
    type: string
    ownerId: string
  }

  export type Model = FirebaseResponse<EventModel>
}

export interface ICreateEvent {
  createEvent(params: ICreateEvent.Params): Promise<ICreateEvent.Model>
}
