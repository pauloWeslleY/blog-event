import { RemoteUpdate } from '@/core/utilities'
import { IEventUpdatedView } from '@/domain/interfaces'
import { makeAxiosHttpClient } from '@/main/factories/http'

type RemoteEventViewUpdatedType = IUpdated<IEventUpdatedView.Params, void>

export function makeRemoteEventViewUpdated(
  url: string,
): RemoteEventViewUpdatedType {
  return new RemoteUpdate<IEventUpdatedView.Params, void>(
    url,
    makeAxiosHttpClient(),
  )
}
