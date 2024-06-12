import { ReactNode } from 'react'
import { NavBar } from '../components/layout'

const LayoutHome = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />

      {children}
    </div>
  )
}

export default LayoutHome
