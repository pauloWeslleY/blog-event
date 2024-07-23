import { IDeleteEvent, RemoteDeleteEvent } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteDeleteEvent(): IDeleteEvent {
  return new RemoteDeleteEvent(makeRemoteDatabase())
}
