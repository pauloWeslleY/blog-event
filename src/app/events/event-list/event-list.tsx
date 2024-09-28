'use client'
import { EventModel } from '@/data/models'
import { useSearchingEvent } from '../hook'
import { EventCard } from '../event-card/event-card'

type EventListProps = {
  eventList: EventModel[]
}

export function EventList({ eventList }: EventListProps) {
  const { loadSearchEvent } = useSearchingEvent({ eventList })

  return (
    <>
      {loadSearchEvent.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </>
  )
}
