import { IEditEvent, RemoteEditEvent } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteEditEvent(): IEditEvent {
  return new RemoteEditEvent(makeRemoteDatabase())
}
