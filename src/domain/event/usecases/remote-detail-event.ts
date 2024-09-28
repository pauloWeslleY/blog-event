import { doc, getDoc } from 'firebase/firestore'
import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { IEventDetail } from '@/data/usecases'
import { Event } from '@/domain/event'
import { eventRepoAdapter } from '../repositories/event-repo-adapter'

export class RemoteDetailEvent implements IEventDetail {
  constructor(private readonly database: IFirebase) {}

  async getDetailEvent({
    eventId,
  }: IEventDetail.Params): Promise<IEventDetail.Model> {
    const response = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.EVENTS, eventId),
    )

    const event = response.data() as Event
    return eventRepoAdapter.eventAdapter(response.id, event)
  }
}
