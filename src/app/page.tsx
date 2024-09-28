import StartPage from './(home)/start-page/page'
import { NavBar } from './components/layout'

export default function Home() {
  return (
    <div className="wrapper">
      <NavBar />

      <StartPage />
    </div>
  )
}
