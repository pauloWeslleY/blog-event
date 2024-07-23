import { IUpdatedViewEvent, RemoteUpdatedViewEvent } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteUpdatedViewEvent(): IUpdatedViewEvent {
  return new RemoteUpdatedViewEvent(makeRemoteDatabase())
}
