import { useRouter } from 'next/navigation'
import { FirebaseError } from 'firebase/app'
import { IAddAccount } from '@/data/usecases'
import { savedCookies } from '@/infra/cache/cookies'
import {
  makeRemoteAddAccount,
  makeRemoteError,
} from '@/main/factories/usecases'
import { useUserStore } from '@/main/store'

export function useAddAccount() {
  const {
    error,
    isError,
    isLoading,
    user,
    setUser,
    setUserError,
    setUserIsError,
    setUserLoading,
  } = useUserStore()
  const router = useRouter()

  async function handlerAuthSignUp(params: IAddAccount.Params) {
    const auth = makeRemoteAddAccount()
    return await auth.register(params)
  }

  async function handlerAddAccount(params: IAddAccount.Params) {
    setUserLoading(true)

    try {
      const { data, error, hasError } = await handlerAuthSignUp(params)
      const onError = makeRemoteError(error?.code)

      if (onError) {
        setUserError(onError?.message)
        setUserIsError(true)
        return
      }

      if (typeof hasError === 'string') {
        setUserError(hasError)
        setUserIsError(true)
        return
      }

      if (hasError instanceof FirebaseError) {
        const onError = makeRemoteError(hasError?.code)
        setUserError(onError?.message)
        setUserIsError(true)
        return
      }

      if (!data) {
        return
      }

      setUser(data)
      savedCookies(data)
      router.push('/events')
    } catch (error) {
      setUserError('Algo de errado aconteceu')
      setUserIsError(true)
    } finally {
      setUserLoading(false)
    }
  }

  return {
    user,
    error,
    isError,
    isLoading,
    handlerAddAccount,
  }
}
