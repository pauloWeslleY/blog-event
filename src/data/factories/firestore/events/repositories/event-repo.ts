import { IEventRepo } from '@/data/factories/firestore'

export class EventRepo implements IEventRepo {
  public event: IEventRepo.Model

  constructor(props: IEventRepo.Model) {
    this.event = props
  }
}
