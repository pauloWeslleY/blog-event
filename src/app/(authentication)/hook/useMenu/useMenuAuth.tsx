import { useRouter } from 'next/navigation'

type LoadMenuAuthType = {
  value: string
  label: string
  action: () => void
}

const useMenuAuth = () => {
  const router = useRouter()

  const loadMenuAuth = (): Array<LoadMenuAuthType> => [
    {
      value: '/login',
      label: 'Login',
      action: () => router.push('/login'),
    },
    {
      value: '/register',
      label: 'Register',
      action: () => router.push('/register'),
    },
  ]

  return { loadMenuAuth }
}

export { useMenuAuth }
