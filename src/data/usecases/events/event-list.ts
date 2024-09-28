import { EventModel } from '@/data/models'

export namespace IEventList {
  export type Model = EventModel
}

export interface IEventList {
  getListEvent(): Promise<IEventList.Model[]>
}
