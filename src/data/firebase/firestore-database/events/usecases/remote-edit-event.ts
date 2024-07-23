import { doc, updateDoc } from 'firebase/firestore'
import { IEditEvent, IFirebase } from '@/data/firebase'
import { EventFactory } from '@/data/factories'
import { COLLECTIONS } from '@/data/firebase/collections'

export class RemoteEditEvent implements IEditEvent {
  private eventUpdate = new EventFactory.Updated()

  constructor(
    private database: IFirebase,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async update(params: IEditEvent.Params): Promise<IEditEvent.Model> {
    const eventUpdatedRef = doc(
      this.database.getDB(),
      COLLECTIONS.EVENTS,
      params.id,
    )

    const { eventUpdate } = this.eventUpdate.create({
      ...params,
      public: params.public,
      createdAt: params.createdAt,
      updatedAt: new Date(),
    })

    await updateDoc(eventUpdatedRef, eventUpdate)

    return { ...eventUpdate }
  }
}
