import Image from 'next/image'
import { NavBar } from '@/app/components/layout'
import {
  makeRemoteEventDetail,
  makeRemoteUserOwner,
} from '@/main/factories/usecases'
import { EventInfoDetailContent } from './components'
import { EventType } from './components/event-type/event-type'
import './styles.css'

interface EventInfoParams {
  params: { eventInfoId: string }
}

export default async function EventInfo({
  params: { eventInfoId },
}: EventInfoParams) {
  const detailsEvent = makeRemoteEventDetail()
  const user = makeRemoteUserOwner()
  const event = await detailsEvent.getDetailEvent({ eventId: eventInfoId })
  const userOwner = await user.getUserOwner(event.ownerId)

  return (
    <div className="wrapper">
      <NavBar />

      <div className="event-info__container">
        <div className="event-info__wrapper">
          <main className="event-info__content">
            {event && (
              <div className="event-info__banner">
                <Image
                  src={event.photoUrl}
                  alt={event.title}
                  width={634}
                  height={300}
                />
              </div>
            )}

            {event && (
              <div className="event-info__wrapper-information">
                <div className="event-info__wrapper-information-content">
                  <span>Nome do evento:</span> <h3>{event.title}</h3>
                </div>
                <div className="event-info__wrapper-information-content">
                  <span>Descrição do evento:</span> <h3>{event.description}</h3>
                </div>
                <div className="event-info__wrapper-information-content">
                  <span>Organizador do evento:</span>{' '}
                  <h3>{userOwner?.username.toUpperCase()}</h3>
                </div>
              </div>
            )}
          </main>

          <aside className="event-info__details">
            {event && (
              <div className="event-info__details-wrapper">
                <div className="event-info__details-header">
                  <h1 className="event-info__details-title">
                    Informações do Evento
                  </h1>

                  <div className="event-info__separator" />
                </div>

                <EventInfoDetailContent
                  title="Dia do evento"
                  description={event.date}
                />

                <EventType eventType={event.type} />

                <EventInfoDetailContent
                  title="Hora do evento"
                  description={event.hours.concat(':00h')}
                />

                <EventInfoDetailContent
                  title="Evento"
                  description={event.public ? 'Público' : 'Privado'}
                />

                <EventInfoDetailContent
                  title="Visualizações do evento"
                  description={event.views.toString()}
                />
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
