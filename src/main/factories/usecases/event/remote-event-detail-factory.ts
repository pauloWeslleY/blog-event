import { IEventDetail } from '@/data/usecases'
import { RemoteDetailEvent } from '@/domain/event'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteEventDetail(): IEventDetail {
  return new RemoteDetailEvent(makeRemoteDatabase())
}
