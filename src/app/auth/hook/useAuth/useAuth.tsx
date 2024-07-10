import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import {
  makeRemoteAddAccount,
  makeRemoteAuthentication,
} from '@/main/factories/usecases'
import { ISignIn, IUserSignUp } from '@/data/firebase'
import { useUserAuthStore } from '@/main/store'
import { UseAuthProps } from './types'

const useAuth = (): UseAuthProps => {
  const router = useRouter()
  const { setUserAuth } = useUserAuthStore()

  const authSignIn = useMutation({
    mutationFn: async (params: ISignIn.Params) => {
      const login = makeRemoteAuthentication('/authentication/login')
      const response = await login.authentication(params)
      setUserAuth(response)

      if (!response.accessToken) {
        return response
      }

      router.push('/events')
      return response
    },
    onError: (error) => error.message,
  })

  const authSignUp = useMutation({
    mutationFn: async (params: IUserSignUp.Params) => {
      const register = makeRemoteAddAccount('/authentication/register')
      const response = await register.add(params)
      setUserAuth(response)

      if (!response.accessToken) {
        return response
      }

      router.push('/events')
      return response
    },
    onError: (error) => error.message,
  })

  return { authSignIn, authSignUp }
}

export { useAuth }
