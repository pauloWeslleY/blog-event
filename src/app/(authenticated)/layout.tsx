'use client'

import { ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { MenuItem } from 'semantic-ui-react'
import { Banner } from '@/app/components/ui'
import './styles.css'

const LayoutAuthentication = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="form-wrapper">
      <section className="form-banner">
        <Banner />
      </section>

      <div className="form">
        <div className="ui tabular menu">
          <MenuItem
            name="Login"
            active={pathname === '/login'}
            onClick={() => router.push('/login')}
          />
          <MenuItem
            name="Register"
            active={pathname === '/register'}
            onClick={() => router.push('/register')}
          />
        </div>
        <main className="ui container">{children}</main>
      </div>
    </div>
  )
}

export default LayoutAuthentication
