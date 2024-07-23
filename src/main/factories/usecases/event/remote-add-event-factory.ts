import { RemoteAdd } from '@/core/utilities'
import { IAddEvent } from '@/domain/interfaces'
import { makeAxiosHttpClient } from '@/main/factories/http'

type RemoteAddEventType = IAdd<IAddEvent.Params, IAddEvent.Model>

export function makeRemoteAddEvent(url: string): RemoteAddEventType {
  return new RemoteAdd<IAddEvent.Params, IAddEvent.Model>(
    url,
    makeAxiosHttpClient(),
  )
}
