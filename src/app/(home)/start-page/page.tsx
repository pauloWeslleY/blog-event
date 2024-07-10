'use client'

import { TableEvents } from './components'
import './styles.css'

const StartPage = () => {
  return (
    <section className="table-container">
      <h1>Lista de Eventos</h1>

      <TableEvents />
    </section>
  )
}

export default StartPage
