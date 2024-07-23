import { ChangeEvent, useMemo } from 'react'
import { useSearchStore } from '@/main/store'
import { EventModel } from '@/domain/models'

export function useSearchingEvent(params: EventModel[] | undefined) {
  const { search, setSearching } = useSearchStore()

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearching(event.target.value)
  }

  const loadSearchEvent = useMemo(() => {
    const regexp = new RegExp(search, 'i')
    return params?.filter((event) => event.title.match(regexp))
  }, [search, params])

  return { onChangeSearch, loadSearchEvent }
}
