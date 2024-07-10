import { RemoteUserDetails } from '@/core/usecases'
import { IUserDetails } from '@/domain/interfaces'
import { makeAxiosHttpClient } from '@/main/factories/http'

export function makeRemoteUserDetails(url: string): IUserDetails {
  return new RemoteUserDetails(url, makeAxiosHttpClient())
}
