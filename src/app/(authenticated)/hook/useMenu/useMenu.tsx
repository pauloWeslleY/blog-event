import { useRouter } from 'next/navigation'
import { useMenuTransitionStore } from '@/main/store'

const useMenu = () => {
  const { setMenuVisible } = useMenuTransitionStore()
  const router = useRouter()

  const handleNavLogin = () => {
    setMenuVisible()
    router.push('/login')
  }

  return { handleNavLogin }
}

export { useMenu }
