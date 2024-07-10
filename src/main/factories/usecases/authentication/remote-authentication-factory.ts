import { RemoteAuthentication } from '@/core/usecases'
import { IAuthentication } from '@/domain/interfaces'
import { makeAxiosHttpClient } from '@/main/factories/http'

export function makeRemoteAuthentication(url: string): IAuthentication {
  return new RemoteAuthentication(url, makeAxiosHttpClient())
}
