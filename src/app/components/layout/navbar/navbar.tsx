'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
} from 'semantic-ui-react'
import { useUserStore } from '@/main/store/user'
import { ProfileTrigger } from './components'
import { useNavBar } from './hook'
import './styles.css'

const NavBar = () => {
  const router = useRouter()
  const { user } = useUserStore()
  const { options, navList } = useNavBar()

  return (
    <nav className="ui menu">
      {navList().map((props) => (
        <Link key={props.text} href={props.path} className="item">
          {props.text}
        </Link>
      ))}

      <div className="right item">
        <div className="ui icon input icon">
          <input type="text" placeholder="Search..." />
          <i aria-hidden="true" className="search icon" />
        </div>
      </div>

      {user?.accessToken ? (
        <Dropdown
          trigger={<ProfileTrigger name={user?.username || ''} />}
          pointing="top left"
          icon={null}
        >
          <DropdownMenu>
            <DropdownHeader icon="user" content={user.email} />
            <DropdownDivider />
            {options().map((option) => (
              <DropdownItem
                key={option.key}
                icon={option.icon}
                text={option.text}
                onClick={option.action}
              />
            ))}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <>
          <div className="item">
            <button
              className="ui button violet"
              onClick={() => router.push('/register')}
            >
              Sign up
            </button>
          </div>

          <div className="item">
            <button
              className="ui button inverted basic violet"
              onClick={() => router.push('/login')}
            >
              Log-in
            </button>
          </div>
        </>
      )}
    </nav>
  )
}

export { NavBar }
