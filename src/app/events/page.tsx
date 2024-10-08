import { CreateEventModal } from './create-event-modal'
import { EventList } from './event-list/event-list'
import { HeaderSearchingEvent } from './header-searching-event/header-searching-event'
import getEventUserAuth from './action/event'
import './styles.css'

export default async function Events() {
  const eventList = await getEventUserAuth()

  return (
    <div className="events__container">
      <header className="events__header">
        <h1 className="title">Meus Eventos</h1>

        <div className="events__header-action">
          <HeaderSearchingEvent />

          <CreateEventModal />
        </div>
      </header>

      <div className="events__wrapper">
        {eventList.length <= 0 ? (
          <p>Não há eventos cadastrado!</p>
        ) : (
          <EventList eventList={eventList} />
        )}
      </div>
    </div>
  )
}
