import { IUpdateEvent } from '@/data/usecases'
import {
  makeRemoteError,
  makeRemoteUpdatedEvent,
} from '@/main/factories/usecases'
import { useEventStore } from '@/main/store'

export function useUpdateEvent() {
  const {
    event,
    error,
    isError,
    isLoading,
    isSuccess,
    setEvent,
    setEventError,
    setEventIsError,
    setEventIsLoading,
    setEventIsSuccess,
  } = useEventStore()

  async function handlerUpdateEvent(params: IUpdateEvent.Params) {
    setEventIsLoading(true)

    try {
      const event = makeRemoteUpdatedEvent()
      const { data, error } = await event.updateEvent(params)
      const hasErroEvent = makeRemoteError(error?.code)

      if (hasErroEvent) {
        setEventIsError(true)
        setEventError(error?.code)
        return
      }

      if (!data) {
        setEventIsError(true)
        setEventError('Não foi possível atualizar evento!')
        return
      }

      setEvent(data)
      setEventIsSuccess(true)
    } catch (error) {
      setEventIsError(true)
      setEventError('Algo de errado aconteceu')
    } finally {
      setEventIsLoading(false)
    }
  }

  return {
    event,
    error,
    isError,
    isLoading,
    isSuccess,
    handlerUpdateEvent,
    setEvent,
  }
}
