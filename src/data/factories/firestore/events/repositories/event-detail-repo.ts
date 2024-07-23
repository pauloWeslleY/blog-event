import { Timestamp } from 'firebase/firestore'
import { IEventDetailRepo } from '@/data/factories/firestore'
import { makeFormatted } from '@/validation/factories'

export class EventDetailRepo implements IEventDetailRepo {
  public eventDetail: IEventDetailRepo.Model
  private format = makeFormatted()

  constructor(props: IEventDetailRepo.Params) {
    this.eventDetail = {
      ...props,
      createdAt: this.format.formatDateHour({
        date: props.createdAt as Timestamp,
        hours: true,
      }),
    }
  }
}
