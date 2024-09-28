import { EventModel } from '@/data/models'
import { FirebaseResponse } from '@/infra/firebase'

export namespace IUpdateEvent {
  export type Params = {
    id: string
    title: string
    description: string
    hours: string
    date: string
    photoUrl: string
    type: string
    public: boolean
  }

  export type Model = FirebaseResponse<EventModel>
}

export interface IUpdateEvent {
  updateEvent(params: IUpdateEvent.Params): Promise<IUpdateEvent.Model>
}
