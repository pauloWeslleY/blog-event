import { IEventList, RemoteEventList } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteListEvent(): IEventList {
  return new RemoteEventList(makeRemoteDatabase())
}
