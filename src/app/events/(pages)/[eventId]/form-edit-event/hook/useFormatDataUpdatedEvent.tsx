import { FormUpdateEventProps } from '@/app/events/(pages)/[eventId]/form-edit-event/types'
import { IEventDetailRepo } from '@/data/factories'
import { IUpdateEvent } from '@/domain/interfaces'

interface FormatDataUpdatedEventProps {
  eventId: string
  URLFile: string
  params: FormUpdateEventProps
  data: IEventDetailRepo.Model
}

export function useFormatDataUpdatedEvent() {
  const formatDataUpdatedEvent = ({
    eventId,
    URLFile,
    params,
    data,
  }: FormatDataUpdatedEventProps): IUpdateEvent.Params => ({
    title: params.title,
    description: params.description,
    public: params.public,
    date: params.dateEvent,
    hours: params.hourEvent,
    type: params.typeEvent,
    photoUrl: URLFile,
    ownerId: data.ownerId,
    createdAt: data.createdAt,
    id: eventId,
  })

  return { formatDataUpdatedEvent }
}
