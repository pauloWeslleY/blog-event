import { RemoteDelete } from '@/core/utilities'
import { IRemoveEvent } from '@/domain/interfaces'
import { makeAxiosHttpClient } from '@/main/factories/http'

type RemoteRemoveEvent = IRemove<IRemoveEvent.Params, void>

export function makeRemoteRemoveEvent(url: string): RemoteRemoveEvent {
  return new RemoteDelete<IRemoveEvent.Params, void>(url, makeAxiosHttpClient())
}
