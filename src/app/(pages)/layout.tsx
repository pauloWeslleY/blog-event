import { ReactNode } from 'react'
import { NavBar } from '@/app/components/layout'

const LayoutHome = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />

      <main className="ui container">{children}</main>
    </div>
  )
}

export default LayoutHome
