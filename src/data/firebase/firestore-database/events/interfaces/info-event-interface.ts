import { IEventDetailRepo } from '@/data/factories'

export namespace IEventInfo {
  export type Params = {
    eventId: string
  }

  export type Model = IEventDetailRepo.Model
}

export interface IEventInfo {
  getInfoEvent(params: IEventInfo.Params): Promise<IEventInfo.Model>
}
