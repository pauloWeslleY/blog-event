import { getDocs, query, where } from 'firebase/firestore'
import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { IEventList } from '@/data/usecases'
import { Event } from '../entities/event'
import { eventRepoAdapter } from '../repositories/event-repo-adapter'

export class RemoteEventList implements IEventList {
  private eventList: IEventList.Model[]

  constructor(private readonly database: IFirebase) {
    this.eventList = []
  }

  async getListEvent(params: IEventList.Params): Promise<IEventList.Model[]> {
    const queryEvent = query(
      this.database.collection(COLLECTIONS.EVENTS),
      typeof params.find === 'string'
        ? where('ownerId', '==', params.find)
        : where('title', '!=', true),
    )

    const listEvent = await getDocs(queryEvent)

    listEvent.forEach((doc) => {
      const data = doc.data() as Event
      const event = eventRepoAdapter.eventAdapter(doc.id, data)
      this.eventList.push(event)
    })

    return this.eventList
  }
}
