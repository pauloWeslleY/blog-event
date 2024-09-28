import { deleteDoc, doc } from 'firebase/firestore'
import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { IDeleteEvent } from '@/data/usecases'

export class RemoteDeleteEvent implements IDeleteEvent {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly database: IFirebase) {}

  async deleteEvent(params: IDeleteEvent.Params): Promise<void> {
    await deleteDoc(
      doc(this.database.getDB(), COLLECTIONS.EVENTS, params.eventId),
    )
  }
}
