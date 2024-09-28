'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button, TabNav } from '@radix-ui/themes'
import { UserRound } from 'lucide-react'
import { useUserStore } from '@/main/store'
import { useNavBar } from './hook'
import { MenuProfile } from './components'
import './styles.css'

export function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const { user } = useUserStore()
  const { loadNavMenu, loadOptions } = useNavBar()

  return (
    <div className="navbar">
      <TabNav.Root>
        {loadNavMenu.map((props) => (
          <TabNav.Link
            asChild
            key={props.text}
            active={pathname === props.path}
          >
            <Link key={props.text} href={props.path}>
              {props.text}
            </Link>
          </TabNav.Link>
        ))}
      </TabNav.Root>

      {user?.accessToken ? (
        <MenuProfile options={loadOptions()} />
      ) : (
        <Button onClick={() => router.push('/auth')}>
          <UserRound className="icon-user-button" />
          Login
        </Button>
      )}
    </div>
  )
}
