'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button, Flex, TabNav } from '@radix-ui/themes'
import { useUserStore } from '@/main/store/user'
import { useNavBar } from './hook'
import { MenuProfile } from './components'
import './styles.css'

const NavBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { user } = useUserStore()
  const { getNavList, loadOptions } = useNavBar()

  return (
    <nav className="navbar">
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

      {user?.accessToken ? (
        <MenuProfile options={loadOptions()} />
      ) : (
        <Flex gap="2">
          <Button onClick={() => router.push('/register')}>Sign up</Button>
          <Button onClick={() => router.push('/login')}>Login</Button>
        </Flex>
      )}
    </nav>
  )
}

export { NavBar }
