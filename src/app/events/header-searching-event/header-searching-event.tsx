'use client'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/app/components/ui'
import { useSearchStore } from '@/main/store'

export function HeaderSearchingEvent() {
  const { search, setSearching } = useSearchStore()

  return (
    <Input
      icon={SearchIcon}
      placeholder="Pesquisa por eventos"
      className="events__input-search"
      value={search}
      onChange={(event) => setSearching(event.target.value)}
    />
  )
}
