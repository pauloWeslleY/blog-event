import { IEventUpdateRepo } from '@/data/factories'

export namespace IEditEvent {
  export type Params = {
    id: string
    title: string
    description: string
    hours: string
    date: string
    photoUrl: string
    type: string
    ownerId: string
    public: boolean
    createdAt: string
  }

  export type Model = IEventUpdateRepo.Model
}

export interface IEditEvent {
  update(params: IEditEvent.Params): Promise<IEditEvent.Model>
}
