import { COLLECTIONS, IFirebase } from '@/infra/firebase'
import { EventRepository, IEventRepository } from './event-repository'
import {
  EventUpdatedRepository,
  IEventUpdatedRepository,
} from './event-update-repository'

export class EventRepoFactory {
  static executeCreateEvent(
    database: IFirebase,
    collection: COLLECTIONS,
  ): IEventRepository {
    return new EventRepository({ database, collection })
  }

  static executeUpdateEvent(
    database: IFirebase,
    collection: COLLECTIONS,
  ): IEventUpdatedRepository {
    return new EventUpdatedRepository({ database, collection })
  }
}
