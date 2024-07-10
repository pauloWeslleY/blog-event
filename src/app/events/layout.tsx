import { ReactNode } from 'react'
import { NavBar } from '@/app/components/layout'

const LayoutEvents = ({ children }: { children: ReactNode }) => {
  return (
    <div className="wrapper">
      <NavBar />

      <main>{children}</main>
    </div>
  )
}

export default LayoutEvents
