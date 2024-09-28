import { ICreateEvent } from '@/data/usecases'
import {
  makeRemoteCreateEvent,
  makeRemoteError,
} from '@/main/factories/usecases'
import { useEventStore } from '@/main/store'

export function useCreateEvent() {
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

  async function handlerCreateEvent(params: ICreateEvent.Params) {
    setEventIsLoading(true)
    try {
      const event = makeRemoteCreateEvent()
      const { data, error } = await event.createEvent(params)
      const hasErroEvent = makeRemoteError(error?.code)

      if (hasErroEvent) {
        setEventIsError(true)
        setEventError(error?.code)
        return
      }

      if (!data) {
        setEventIsError(true)
        setEventError('Não foi possível cadastrar evento!')
        return
      }

      setEvent(data)
      setEventIsSuccess(true)
    } catch (error: unknown) {
      if (error instanceof TypeError) {
        setEventIsError(true)
        setEventError(error.message)
      }
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
    handlerCreateEvent,
  }
}
