import { Login, Register } from '@/app/auth/components'

type LoadMenuAuthType = {
  value: string
  label: string
  component: () => JSX.Element
}

const useMenuAuth = () => {
  const loadMenuAuth = (): LoadMenuAuthType[] => [
    {
      value: 'login',
      label: 'Login',
      component: Login,
    },
    {
      value: 'register',
      label: 'Register',
      component: Register,
    },
  ]

  return { loadMenuAuth }
}

export { useMenuAuth }
