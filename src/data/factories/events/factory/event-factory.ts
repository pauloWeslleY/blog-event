import { EventRepo, IEventRepo } from '@/data/factories/events'

export namespace EventFactory {
  export class Event {
    add(params: IEventRepo.Model): IEventRepo {
      return new EventRepo(params)
    }
  }
}
