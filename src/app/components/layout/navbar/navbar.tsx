'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button, TabNav } from '@radix-ui/themes'
import { UserRound } from 'lucide-react'
import { useUserAuthStore } from '@/main/store'
import { useNavBar } from './hook'
import { MenuProfile } from './components'
import './styles.css'

export function NavBar() {
  const router = useRouter()
  const pathname = usePathname()
  const { userAuth } = useUserAuthStore()
  const { getNavList, loadOptions } = useNavBar()

  return (
    <div className="navbar">
      <TabNav.Root>
        {getNavList().map((props) => (
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

      {userAuth.accessToken ? (
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
