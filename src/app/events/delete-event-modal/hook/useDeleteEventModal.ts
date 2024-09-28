import { useEventStore } from '@/main/store'
import { IDeleteEvent } from '@/data/usecases'
import { makeRemoteDeleteEvent } from '@/main/factories/usecases'

export function useDeleteEventModal() {
  const {
    error,
    isError,
    isLoading,
    setEventIsLoading,
    setEventError,
    setEventIsError,
  } = useEventStore()

  async function handlerDeleteEvent(params: IDeleteEvent.Params) {
    setEventIsLoading(true)

    try {
      const event = makeRemoteDeleteEvent()
      await event.deleteEvent(params)
    } catch (error: unknown) {
      if (error instanceof TypeError) {
        setEventError(error.message)
        setEventIsError(true)
      }
    } finally {
      setEventIsLoading(false)
    }
  }

  return {
    error,
    isError,
    isLoading,
    handlerDeleteEvent,
  }
}
