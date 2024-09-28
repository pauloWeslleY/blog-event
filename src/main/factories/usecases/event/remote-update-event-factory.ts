import { makeRemoteDatabase } from '@/main/factories/firebase-database'
import { RemoteUpdateEvent } from '@/domain/event'
import { COLLECTIONS } from '@/infra/firebase'
import { IUpdateEvent } from '@/data/usecases'

export function makeRemoteUpdatedEvent(): IUpdateEvent {
  return new RemoteUpdateEvent({
    database: makeRemoteDatabase(),
    collection: COLLECTIONS.EVENTS,
  })
}
