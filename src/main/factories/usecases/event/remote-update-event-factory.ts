import { RemoteUpdate } from '@/core/utilities'
import { IUpdateEvent } from '@/domain/interfaces'
import { makeAxiosHttpClient } from '@/main/factories/http'

type RemoteUpdatedEventType = IUpdated<IUpdateEvent.Params, IUpdateEvent.Model>

export function makeRemoteUpdatedEvent(url: string): RemoteUpdatedEventType {
  return new RemoteUpdate<IUpdateEvent.Params, IUpdateEvent.Model>(
    url,
    makeAxiosHttpClient(),
  )
}
