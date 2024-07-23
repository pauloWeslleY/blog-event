import { addDoc } from 'firebase/firestore'
import { ICreateEvent, IFirebase } from '@/data/firebase'
import { EventFactory } from '@/data/factories'
import { COLLECTIONS } from '@/data/firebase/collections'

export class RemoteCreateEvent implements ICreateEvent {
  private eventInfo = new EventFactory.Info()

  constructor(
    private database: IFirebase,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async create(params: ICreateEvent.Params): Promise<ICreateEvent.Model> {
    const eventCreateRef = this.database.collection(COLLECTIONS.EVENTS)

    const { event } = this.eventInfo.create({
      ...params,
      public: true,
      views: 0,
      createdAt: new Date(),
    })

    await addDoc(eventCreateRef, { ...event })

    return { event }
  }
}
