import { IEventInfo } from '@/data/firebase'

export namespace IDetailEvent {
  export type Model = IEventInfo.Model
}

export interface IDetailEvent {
  getEventDetail(): Promise<IDetailEvent.Model>
}
