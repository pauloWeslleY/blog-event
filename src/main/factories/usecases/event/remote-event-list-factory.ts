import { IEventList, RemoteEventList } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/usecases'

export function makeRemoteListEvent(): IEventList {
  return new RemoteEventList(makeRemoteDatabase())
}
