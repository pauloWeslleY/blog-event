'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { TabNav } from '@radix-ui/themes'
import { useMenuAuth } from './hook'
import './styles.css'

const LayoutAuthentication = (props: { children: ReactNode }) => {
  const { loadMenuAuth } = useMenuAuth()
  const pathname = usePathname()

  return (
    <div className="wrapper">
      <section className="form-banner" />

      <div className="form">
        <div className="TabsRoot">
          <TabNav.Root>
            {loadMenuAuth().map((props) => (
              <TabNav.Link
                key={props.value}
                asChild
                active={pathname === props.value}
              >
                <Link href={props.value}>{props.label}</Link>
              </TabNav.Link>
            ))}
          </TabNav.Root>

          <main className="TabsContent">{props.children}</main>
        </div>
      </div>
    </div>
  )
}

export default LayoutAuthentication
