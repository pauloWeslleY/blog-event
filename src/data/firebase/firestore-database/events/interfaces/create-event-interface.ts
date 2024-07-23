import { IEventRepo } from '@/data/factories'

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

  export type Model = {
    event: IEventRepo.Model
  }
}

export interface ICreateEvent {
  create(params: ICreateEvent.Params): Promise<ICreateEvent.Model>
}
