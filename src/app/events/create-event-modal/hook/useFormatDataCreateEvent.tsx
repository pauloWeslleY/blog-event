import { FormCreatedEventProps } from '@/app/events/create-event-modal/types'
import { ICreateEvent } from '@/data/firebase'

export function useFormatDataCreateEvent() {
  const formatDataCreateEvent = (
    ownerId: string,
    URLFile: string,
    params: FormCreatedEventProps,
  ): ICreateEvent.Params => ({
    title: params.title,
    description: params.description,
    date: params.dateEvent,
    hours: params.hourEvent,
    type: params.typeEvent,
    photoUrl: URLFile,
    ownerId,
  })

  return { formatDataCreateEvent }
}
