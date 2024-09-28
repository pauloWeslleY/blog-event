'use client'

import { ChangeEvent, useMemo } from 'react'
import { useSearchStore } from '@/main/store'
import { EventModel } from '@/data/models'

type UseSearchingEvent = {
  eventList: EventModel[]
}

export function useSearchingEvent({ eventList }: UseSearchingEvent) {
  const { search, setSearching } = useSearchStore()

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearching(event.target.value)
  }

  const loadSearchEvent = useMemo(() => {
    const regexp = new RegExp(search, 'i')

    if (eventList.length === 0) {
      return []
    }

    return eventList.filter((event) => event.title.match(regexp))
  }, [search, eventList])

  return { loadSearchEvent, onChangeSearch, search }
}
