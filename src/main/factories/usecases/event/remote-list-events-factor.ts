import { RemoteListEvents } from '@/core/usecases'
import { IEventList } from '@/data/firebase'
import { makeAxiosHttpClient } from '@/main/factories/http'

export function makeRemoteListEvents(url: string): IEventList {
  return new RemoteListEvents(url, makeAxiosHttpClient())
}
