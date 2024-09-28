'use client'
import { useRouter } from 'next/navigation'
import { IAuthentication } from '@/data/usecases'
import { savedCookies } from '@/infra/cache/cookies'
import {
  makeRemoteAuthentication,
  makeRemoteError,
} from '@/main/factories/usecases'
import { useUserStore } from '@/main/store'

export function useAuthentication() {
  const {
    error,
    isError,
    isLoading,
    setUser,
    setUserError,
    setUserIsError,
    setUserLoading,
  } = useUserStore()
  const router = useRouter()

  async function handlerAuthSignIn(params: IAuthentication.Params) {
    const auth = makeRemoteAuthentication()
    return await auth.authentication(params)
  }

  async function handlerAuthentication(params: IAuthentication.Params) {
    setUserLoading(true)

    try {
      const { data, error } = await handlerAuthSignIn(params)
      const hasError = makeRemoteError(error?.code)

      if (hasError) {
        setUserError(hasError.message)
        setUserIsError(true)
        return
      }

      if (!data) {
        return
      }

      setUser(data)
      savedCookies(data)
      setUserLoading(false)
      router.push('/events')
    } catch (error) {
      console.log(error)
      setUserError('Algo de errado aconteceu')
      setUserIsError(true)
    } finally {
      setUserLoading(false)
    }
  }

  return {
    error,
    isError,
    isLoading,
    handlerAuthentication,
  }
}
