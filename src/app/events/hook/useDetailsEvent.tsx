import { useQuery } from '@tanstack/react-query'
import { EditEventProps } from '@/app/events/(pages)/[eventId]/types'
import { makeRemoteEventDetails } from '@/main/factories/usecases'

type UseDetailsEvent = EditEventProps

export function useDetailsEvent({ params }: UseDetailsEvent) {
  const { eventId } = params

  const loadDetailsEvent = useQuery({
    queryKey: ['event-details', eventId],
    queryFn: () => {
      const detailsEvent = makeRemoteEventDetails(
        `/event/event-details/${eventId}`,
      )

      return detailsEvent.getEventDetail()
    },
    enabled: !!eventId,
  })

  return { loadDetailsEvent }
}
