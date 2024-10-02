import { doc, updateDoc } from 'firebase/firestore'
import { IFirebase } from '@/infra/firebase'
import { COLLECTIONS } from '@/infra/firebase/collections'
import { IUpdatedViewEvent } from '@/data/usecases'

export class RemoteUpdatedViewEvent implements IUpdatedViewEvent {
  constructor(private readonly database: IFirebase) {}

  async updatedViewEvent(params: IUpdatedViewEvent.Params): Promise<void> {
    const eventUpdatedViewRef = doc(
      this.database.getDB(),
      COLLECTIONS.EVENTS,
      params.eventId,
    )

    await updateDoc(eventUpdatedViewRef, {
      views: params.views + 1,
    })
  }
}
