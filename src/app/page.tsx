'use client'
import { NavBar } from './components/layout'
import StartPage from './(home)/start-page/page'

export default function Home() {
  return (
    <div className="wrapper">
      <NavBar />

      <StartPage />
    </div>
  )
}
