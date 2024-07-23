import { RemoteEventDetails } from '@/core/usecases'
import { IDetailEvent } from '@/domain/interfaces'
import { makeAxiosHttpClient } from '@/main/factories/http'

export function makeRemoteEventDetails(url: string): IDetailEvent {
  return new RemoteEventDetails(url, makeAxiosHttpClient())
}
