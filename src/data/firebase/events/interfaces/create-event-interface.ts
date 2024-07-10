import { IEventRepo } from '@/data/factories'

export namespace ICreateEvent {
  export type Params = {
    title: string
    description: string
    hours: string
    date: string
    photoUrl: File | null
    type: string
    ownerId: string
  }

  export type Model = {
    event: Omit<IEventRepo.Model, 'id'>
  }
}

export interface ICreateEvent {
  create(params: ICreateEvent.Params): Promise<ICreateEvent.Model>
}
