import { IUpdatedViewEvent } from '@/data/usecases'
import { RemoteUpdatedViewEvent } from '@/domain/event'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteUpdatedViewEvent(): IUpdatedViewEvent {
  return new RemoteUpdatedViewEvent(makeRemoteDatabase())
}
