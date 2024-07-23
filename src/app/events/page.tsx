'use client'
import { Search } from 'lucide-react'
import { Input, Loader } from '@/app/components/ui'
import { useLoaderStore, useSearchStore } from '@/main/store'
import { CreateEventModal } from './create-event-modal'
import { useEventList, useSearchingEvent } from './hook'
import { EventCard } from './event-card'
import './styles.css'

function Events() {
  const {
    loadEventList: { data, isLoading },
  } = useEventList()

  const { search } = useSearchStore()
  const { loader } = useLoaderStore()
  const { loadSearchEvent, onChangeSearch } = useSearchingEvent(data)

  return (
    <div className="events__container">
      <header className="events__header">
        <h1 className="title">Meus Eventos</h1>

        <div className="events__header-action">
          <Input
            icon={Search}
            placeholder="Pesquisa por eventos"
            className="events__input-search"
            value={search}
            onChange={onChangeSearch}
          />

          <CreateEventModal />
        </div>
      </header>

      {isLoading && (
        <div className="events__loader-container">
          <Loader text="Carregando" />
        </div>
      )}

      {!isLoading && (
        <div className="events__wrapper">
          {data && data.length === 0 ? (
            <p>Não há eventos cadastrado!</p>
          ) : (
            <>
              {loader && <Loader />}

              {!loader &&
                loadSearchEvent?.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Events
