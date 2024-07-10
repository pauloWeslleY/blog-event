import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { COLLECTIONS, IEventList, IFirebase } from '@/data/firebase'

export class RemoteEventList implements IEventList {
  private eventList: IEventList.Model[] = []

  // eslint-disable-next-line prettier/prettier
  constructor(private database: IFirebase) { }

  async getListEvent(): Promise<IEventList.Model[]> {
    const queryEvent = query(
      this.database.getCollection(COLLECTIONS.EVENTS),
      where('title', '!=', true),
      orderBy('title', 'asc'),
    )

    const listEvent = await getDocs(queryEvent)

    listEvent.forEach((doc) => {
      this.eventList.push({
        ...doc.data(),
        id: doc.id,
      } as IEventList.Model)
    })

    return this.eventList
  }
}
