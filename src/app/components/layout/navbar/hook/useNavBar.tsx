import { useUserAuth } from '@/app/hook'
import { useUserStore } from '@/main/store/user'
import { MenuOptionsProps } from '@/app/components/layout/navbar/types'

const useNavBar = () => {
  const { handleLogout } = useUserAuth()
  const { user } = useUserStore()

  const loadOptions = (): MenuOptionsProps => [
    {
      key: 'sign-out',
      text: 'Sign Out',
      action: () => handleLogout(),
    },
  ]

  const getNavList = () => {
    if (user?.accessToken) {
      return [
        { text: 'Home', path: '/' },
        { text: 'Publicar Eventos', path: '/create-events' },
        { text: 'Meus Eventos', path: '/events' },
      ]
    } else {
      return [{ text: 'Home', path: '/' }]
    }
  }

  return { loadOptions, getNavList }
}

export { useNavBar }
