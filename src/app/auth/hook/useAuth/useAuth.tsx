import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import {
  makeRemoteAddAccount,
  makeRemoteAuthentication,
} from '@/main/factories/usecases'
import { ISignIn, IUserSignUp } from '@/data/firebase'
import { useUserAuthStore } from '@/main/store'
import { AccountModel } from '@/domain/models'
import { UseAuthProps } from './types'

export function useAuth(): UseAuthProps {
  const router = useRouter()
  const { setUserAuth } = useUserAuthStore()

  function handleIsVerifyAuthToken(params: AccountModel) {
    if (!params.accessToken) {
      return params
    }

    router.push('/')
    return params
  }

  const authSignIn = useMutation({
    mutationFn: async (params: ISignIn.Params) => {
      const login = makeRemoteAuthentication('/authentication/login')
      const response = await login.authentication(params)
      setUserAuth(response)
      return handleIsVerifyAuthToken(response)
    },
    onError: (error) => error.message,
  })

  const authSignUp = useMutation({
    mutationFn: async (params: IUserSignUp.Params) => {
      const register = makeRemoteAddAccount('/authentication/register')
      const response = await register.add(params)
      setUserAuth(response)
      return handleIsVerifyAuthToken(response)
    },
    onError: (error) => error.message,
  })

  return { authSignIn, authSignUp }
}
