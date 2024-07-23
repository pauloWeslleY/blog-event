import { doc, getDoc } from 'firebase/firestore'
import { EventFactory } from '@/data/factories'
import { COLLECTIONS, IEventInfo, IFirebase } from '@/data/firebase'
import { EventModel } from '@/domain/models'
import { makeFormatted } from '@/validation/factories'

export class RemoteInfoEvent implements IEventInfo {
  private eventDetails = new EventFactory.Details()
  private format = makeFormatted()

  // eslint-disable-next-line prettier/prettier
  constructor(private database: IFirebase) { }

  async getInfoEvent({
    eventId,
  }: IEventInfo.Params): Promise<IEventInfo.Model> {
    const response = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.EVENTS, eventId),
    )

    const event = response.data() as EventModel
    const data = this.eventDetails.create({ ...event, id: eventId }).eventDetail

    return data
  }
}
