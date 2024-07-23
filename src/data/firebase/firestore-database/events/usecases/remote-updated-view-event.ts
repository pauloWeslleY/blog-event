import { doc, updateDoc } from 'firebase/firestore'
import { IFirebase, IUpdatedViewEvent } from '@/data/firebase'
import { COLLECTIONS } from '@/data/firebase/collections'

export class RemoteUpdatedViewEvent implements IUpdatedViewEvent {
  constructor(
    private readonly database: IFirebase,
    // eslint-disable-next-line prettier/prettier
  ) { }

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
