import { FormUpdateEventProps } from '../types/form-update-event-props'

interface FormatDataUpdatedEventProps {
  eventId: string
  URLFile: string
  params: FormUpdateEventProps
}

export function useFormatDataUpdatedEvent() {
  const formatDataUpdatedEvent = ({
    eventId,
    URLFile,
    params,
  }: FormatDataUpdatedEventProps) => ({
    title: params.title,
    description: params.description,
    public: params.public,
    date: params.dateEvent,
    hours: params.hourEvent,
    type: params.typeEvent,
    photoUrl: URLFile,
    id: eventId,
  })

  return { formatDataUpdatedEvent }
}
