import { Login, Register } from '@/app/auth/components'

type LoadMenuAuthType = {
  value: 'login' | 'register'
  label: string
  component: () => JSX.Element
}

export function useMenuAuth() {
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
