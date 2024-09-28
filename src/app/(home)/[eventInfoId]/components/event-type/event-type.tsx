'use client'

import { EventInfoDetailContent } from '../event-info-detail-content/event-info-detail-content'
import { useEventInfo } from './hook/useEventInfo'

type EventTypeProps = {
  eventType: string
}

export function EventType({ eventType }: EventTypeProps) {
  const { loadEventType } = useEventInfo(eventType)

  return (
    <EventInfoDetailContent
      title="Tipo do evento"
      description={loadEventType?.label || ''}
    />
  )
}
