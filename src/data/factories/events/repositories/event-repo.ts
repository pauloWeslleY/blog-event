import { IEventRepo } from '@/data/factories/events'

export class EventRepo implements IEventRepo {
  public event: IEventRepo.Model

  constructor(props: IEventRepo.Model) {
    this.event = props
  }
}
