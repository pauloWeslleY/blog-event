import { IDeleteEvent } from '@/data/usecases'
import { RemoteDeleteEvent } from '@/domain/event'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteDeleteEvent(): IDeleteEvent {
  return new RemoteDeleteEvent(makeRemoteDatabase())
}
