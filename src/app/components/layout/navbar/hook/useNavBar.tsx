import { useLogout } from '@/app/hook'
import { MenuOptionsProps } from '@/app/components/layout/navbar/types'
import { useUserAuthStore } from '@/main/store'

const useNavBar = () => {
  const { handleLogout } = useLogout()
  const { userAuth } = useUserAuthStore()

  const loadOptions = (): MenuOptionsProps => [
    {
      key: 'sign-out',
      text: 'Sign Out',
      action: () => handleLogout(),
    },
  ]

  const getNavList = () => {
    if (userAuth.accessToken) {
      return [
        { text: 'Home', path: '/' },
        { text: 'Eventos', path: '/events' },
      ]
    } else {
      return [{ text: 'Home', path: '/' }]
    }
  }

  return { loadOptions, getNavList }
}

export { useNavBar }
