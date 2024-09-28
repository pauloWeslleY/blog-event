import { makeRemoteListEvent } from '@/main/factories/usecases'
import { PostEvent } from './components'
import './styles.css'

async function StartPage() {
  const response = makeRemoteListEvent()
  const eventList = await response.getListEvent()

  // if (isLoading) {
  //   return (
  //     <div className="loader-content">
  //       <Loader text="Carregando lista de eventos" />
  //     </div>
  //   )
  // }

  return (
    <section className="home-event__container">
      <header className="home-event__header">
        <h1 className="title">Lista de Eventos</h1>
      </header>

      <div className="home-event__content">
        <main className="home-event__list">
          <div className="home-event__list-container">
            {eventList.length > 0 &&
              eventList.map((event) => (
                <PostEvent key={event.id} event={event} />
              ))}
          </div>
        </main>

        <aside className="home-event__list-info">
          <h3 className="home-event__list-info-title">Eventos Públicos</h3>

          <div className="home-event__list-info-separator-wrapper">
            <div className="home-event__list-info-separator" />
          </div>

          <ul className="home-event__list-info-public">
            {eventList.length > 0 &&
              eventList
                .filter((props) => props.public === true)
                .map((event) => (
                  <li
                    key={event.id}
                    className="home-event__list-info-public-item"
                  >
                    <h4>{event.title}</h4>
                    <span>{event.type}</span>
                  </li>
                ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default StartPage
