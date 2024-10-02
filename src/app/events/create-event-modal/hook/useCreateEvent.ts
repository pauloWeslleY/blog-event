import { ICreateEvent } from '@/data/usecases'
import {
  makeRemoteCreateEvent,
  makeRemoteError,
  makeRemoteListEvent,
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

  async function hasExistEvent(title: string) {
    const response = makeRemoteListEvent()
    const eventList = await response.getListEvent({ find: false })
    return eventList.some((event) => event.title === title)
  }

  async function handlerCreateEvent(params: ICreateEvent.Params) {
    setEventIsLoading(true)
    const isExistEvent = await hasExistEvent(params.title)

    if (isExistEvent) {
      setEventIsError(true)
      setEventError('Evento já existente!')
      return
    }

    try {
      const event = makeRemoteCreateEvent()
      const { data, error } = await event.createEvent(params)
      const hasErroEvent = makeRemoteError(error?.code)

      if (hasErroEvent) {
        setEventIsError(true)
        setEventError(hasErroEvent.code)
        return
      }

      if (!data) {
        setEventIsError(true)
        setEventError('Não foi possível cadastrar evento!')
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
    handlerCreateEvent,
  }
}
