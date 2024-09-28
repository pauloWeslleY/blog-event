import { ICreateEvent } from '@/data/usecases'
import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { Event } from '@/domain/event'
import { EventRepoFactory } from '../repositories/event-repo-factory'

interface RemoteCreateEventDependencies {
  readonly database: IFirebase
  readonly collection: COLLECTIONS
}

export class RemoteCreateEvent implements ICreateEvent {
  private database: IFirebase
  private collection: COLLECTIONS

  constructor(protected readonly dependencies: RemoteCreateEventDependencies) {
    this.database = dependencies.database
    this.collection = dependencies.collection
  }

  async createEvent(params: ICreateEvent.Params): Promise<ICreateEvent.Model> {
    const event = EventRepoFactory.executeCreateEvent(
      this.database,
      this.collection,
    )

    const newEvent = new Event({ ...params })
    return await event.save(newEvent)
  }
}
