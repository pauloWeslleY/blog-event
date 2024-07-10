import { ICreateEvent, RemoteCreateEvent } from '@/data/firebase'
import {
  makeRemoteDatabase,
  makeRemoteDownloadUrl,
} from '@/main/factories/usecases'

export function makeRemoteCreateEvent(): ICreateEvent {
  return new RemoteCreateEvent(makeRemoteDatabase(), makeRemoteDownloadUrl())
}
