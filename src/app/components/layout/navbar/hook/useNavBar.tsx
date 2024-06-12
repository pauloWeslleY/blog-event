import { useUserAuth } from '@/app/hook'
import { useUserStore } from '@/main/store/user'

const useNavBar = () => {
  const { handleLogout } = useUserAuth()
  const { user } = useUserStore()

  const options = () => [
    {
      key: 'sign-out',
      text: 'Sign Out',
      icon: 'sign out',
      action: () => handleLogout(),
    },
  ]

  const navList = () => {
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

  return { options, navList }
}

export { useNavBar }
