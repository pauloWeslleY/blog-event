import { useRouter } from 'next/navigation'
import { IUpdatedViewEvent } from '@/data/usecases'
import { useEventStore } from '@/main/store'
import { makeRemoteUpdatedViewEvent } from '@/main/factories/usecases'

export function useUpdatedViewEvent() {
  const router = useRouter()
  const { isLoading, setEventIsLoading, setEventIsSuccess } = useEventStore()

  async function handlerUpdateViewsEvent(params: IUpdatedViewEvent.Params) {
    setEventIsLoading(true)
    const event = makeRemoteUpdatedViewEvent()
    await event.updatedViewEvent(params)

    setEventIsLoading(false)
    setEventIsSuccess(true)
    router.push(`/${params.eventId}`)
  }

  return { handlerUpdateViewsEvent, isLoading }
}
