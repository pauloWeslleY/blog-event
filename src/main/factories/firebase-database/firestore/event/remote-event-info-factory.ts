import { IEventInfo, RemoteInfoEvent } from '@/data/firebase'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function makeRemoteEventInfo(): IEventInfo {
  return new RemoteInfoEvent(makeRemoteDatabase())
}
