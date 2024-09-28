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

  async function handlerAuthentication(params: IAuthentication.Params) {
    setUserLoading(true)
    const { authentication } = makeRemoteAuthentication()
    const { data, error } = await authentication(params)
    const hasError = makeRemoteError(error?.code)

    if (hasError) {
      setUserError(error?.message)
      setUserIsError(true)
      return
    }

    if (!data) {
      return
    }

    setUser(data)
    savedCookies(data)
    setUserLoading(false)
  }

  return {
    error,
    isError,
    isLoading,
    handlerAuthentication,
  }
}
