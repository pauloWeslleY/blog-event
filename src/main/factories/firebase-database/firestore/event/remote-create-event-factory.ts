import { ICreateEvent, RemoteCreateEvent } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteCreateEvent(): ICreateEvent {
  return new RemoteCreateEvent(makeRemoteDatabase())
}
