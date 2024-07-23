'use client'
import Image from 'next/image'
import dayjs from 'dayjs'
import { NavBar } from '@/app/components/layout'
import { useDetailsEvent } from '@/app/hook'
import './styles.css'
import { Loader } from '@/app/components/ui'
import { useEventInfo } from './hook'
import { EventInfoDetailContent } from './components'

interface EventInfoParams {
  params: { eventInfoId: string }
}

function EventInfo({ params: { eventInfoId } }: EventInfoParams) {
  const {
    loadDetailsEvent: { data, isLoading },
  } = useDetailsEvent({ params: { eventId: eventInfoId } })

  const { loadEventType, loadOwnerInfo } = useEventInfo(data)

  return (
    <div className="wrapper">
      <NavBar />

      {isLoading && (
        <div className="loader-content">
          <Loader text="Carregando Informações do evento" />
        </div>
      )}

      {!isLoading && (
        <div className="event-info__container">
          <div className="event-info__wrapper">
            <main className="event-info__content">
              {data && (
                <div className="event-info__banner">
                  <Image
                    src={data.photoUrl}
                    alt={data.title}
                    width={634}
                    height={300}
                  />
                </div>
              )}

              {data && (
                <div className="event-info__wrapper-information">
                  <div className="event-info__wrapper-information-content">
                    <span>Nome do evento:</span> <h3>{data.title}</h3>
                  </div>
                  <div className="event-info__wrapper-information-content">
                    <span>Descrição do evento:</span>{' '}
                    <h3>{data.description}</h3>
                  </div>
                  <div className="event-info__wrapper-information-content">
                    <span>Organizador do evento:</span>{' '}
                    <h3>{loadOwnerInfo?.username.toUpperCase()}</h3>
                  </div>
                </div>
              )}
            </main>

            <aside className="event-info__details">
              {data && (
                <div className="event-info__details-wrapper">
                  <div className="event-info__details-header">
                    <h1 className="event-info__details-title">
                      Informações do Evento
                    </h1>

                    <div className="event-info__separator" />
                  </div>

                  <EventInfoDetailContent
                    title="Dia do evento"
                    description={dayjs(data.date).format('DD/MM/YYYY')}
                  />

                  <EventInfoDetailContent
                    title="Tipo do evento"
                    description={loadEventType?.label || ''}
                  />

                  <EventInfoDetailContent
                    title="Hora do evento"
                    description={data.hours.concat(':00h')}
                  />

                  <EventInfoDetailContent
                    title="Evento"
                    description={data.public ? 'Público' : 'Privado'}
                  />

                  <EventInfoDetailContent
                    title="Visualizações do evento"
                    description={data.views.toString()}
                  />
                </div>
              )}
            </aside>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventInfo
