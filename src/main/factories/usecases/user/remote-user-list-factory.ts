import { RemoteListUser } from '@/core/usecases'
import { IUserList } from '@/data/firebase'
import { makeAxiosHttpClient } from '@/main/factories/http'

export function makeRemoteListUser(url: string): IUserList {
  return new RemoteListUser(url, makeAxiosHttpClient())
}
