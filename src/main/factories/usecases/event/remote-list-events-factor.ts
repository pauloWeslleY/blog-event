import { IEventList } from '@/data/usecases'
import { RemoteEventList } from '@/domain/event'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteListEvent(): IEventList {
  return new RemoteEventList(makeRemoteDatabase())
}
