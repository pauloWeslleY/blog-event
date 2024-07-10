import { IEventRepo } from '@/data/factories'
import { ICreateEvent } from '@/data/firebase'

export namespace IAddEvent {
  export type Params = ICreateEvent.Params

  export type Model = IEventRepo.Model
}
