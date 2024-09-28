import { EventModel } from '@/data/models'

export namespace IEventList {
  export type Params = {
    find: boolean | string
  }

  export type Model = EventModel
}

export interface IEventList {
  getListEvent(params: IEventList.Params): Promise<IEventList.Model[]>
}
