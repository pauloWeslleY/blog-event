import { doc, getDoc } from 'firebase/firestore'
import { IUpdateEvent } from '@/data/usecases'
import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { Event } from '@/domain/event'
import { EventRepoFactory } from '../repositories/event-repo-factory'

interface RemoteUpdateEventDependencies {
  readonly database: IFirebase
  readonly collection: COLLECTIONS
}

export class RemoteUpdateEvent implements IUpdateEvent {
  private database: IFirebase
  private collection: COLLECTIONS

  constructor(protected readonly dependencies: RemoteUpdateEventDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async updateEvent(params: IUpdateEvent.Params): Promise<IUpdateEvent.Model> {
    const event = EventRepoFactory.executeUpdateEvent(
      this.database,
      this.collection,
    )

    const response = await getDoc(
      doc(this.database.getDB(), this.collection, params.id),
    )

    const { ownerId } = response.data() as Event

    const updatedEvent = new Event({ ownerId, ...params })
    updatedEvent.updateAt = new Date()
    updatedEvent.eventPublic = params.public

    return await event.save(params.id, updatedEvent)
  }
}
