import { useMemo } from 'react'
import {
  MenuOptionsProps,
  NavListProps,
} from '@/app/components/layout/navbar/types'
import { useUserStore } from '@/main/store'
import { useLogout } from '@/app/hook'

export function useNavBar() {
  const { handleLogout } = useLogout()
  const { user } = useUserStore()

  const loadOptions = (): MenuOptionsProps[] => [
    {
      key: 'sign-out',
      text: 'Sign Out',
      action: async () => await handleLogout(),
    },
  ]

  const loadNavMenu = useMemo((): NavListProps[] => {
    if (user?.accessToken) {
      return [
        { text: 'Home', path: '/' },
        { text: 'Eventos', path: '/events' },
      ]
    }
    return [{ text: 'Home', path: '/' }]
  }, [user?.accessToken])

  return {
    loadOptions,
    loadNavMenu,
  }
}
