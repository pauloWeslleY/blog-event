import { makeRemoteDatabase } from '@/main/factories/firebase-database'
import { ICreateEvent } from '@/data/usecases'
import { RemoteCreateEvent } from '@/domain/event'
import { COLLECTIONS } from '@/infra/firebase'

export function makeRemoteCreateEvent(): ICreateEvent {
  return new RemoteCreateEvent({
    database: makeRemoteDatabase(),
    collection: COLLECTIONS.EVENTS,
  })
}
