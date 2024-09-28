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
    } catch (error) {
      setEventError('Algo de errado aconteceu')
      setEventIsError(true)
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
