import { useQuery } from '@tanstack/react-query'
import { makeRemoteListEvents } from '@/main/factories/usecases'

export function useEventList() {
  const loadEventList = useQuery({
    queryKey: ['list-events'],
    queryFn: () => {
      const eventsList = makeRemoteListEvents('/event/event-list')
      return eventsList.getListEvent()
    },
  })

  return { loadEventList }
}
