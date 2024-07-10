import { RemoteAdd } from '@/core/usecases'
import { IAdd } from '@/domain/interfaces'
import { IAddEvent } from '@/domain/interfaces/add-event'
import { makeAxiosHttpClient } from '@/main/factories/http'

type RemoteAddEventType = IAdd<IAddEvent.Params, IAddEvent.Model>

export function makeRemoteAddEvent(url: string): RemoteAddEventType {
  return new RemoteAdd<IAddEvent.Params, IAddEvent.Model>(
    url,
    makeAxiosHttpClient(),
  )
}
