'use client'
import { TextField } from '@radix-ui/themes'
import { Search } from 'lucide-react'
import { Loader } from '@/app/components/ui'
import { CreateEventModal } from './create-events-modal'
import { useEventList } from './hook'
import { EventCard } from './event-card'
import './styles.css'

function Events() {
  const {
    loadEventList: { data, isLoading },
  } = useEventList()

  return (
    <div className="container">
      <header className="header-events">
        <h1 className="title">Meus Eventos</h1>

        <div className="header-action">
          <TextField.Root
            placeholder="Pesquisa por eventos"
            onChange={(e) => console.log(e.target.value)}
          >
            <TextField.Slot>
              <Search size={16} />
            </TextField.Slot>
          </TextField.Root>

          <CreateEventModal />
        </div>
      </header>

      <div className="event-wrapper">
        {isLoading && <Loader />}

        {!isLoading &&
          data?.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  )
}

export default Events
