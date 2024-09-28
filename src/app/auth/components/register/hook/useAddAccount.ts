import { useRouter } from 'next/navigation'
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

  // async function handlerRegister(params: IAddAccount.Params) {
  //   const authentication = makeRemoteDatabaseAuthSignUp()
  //   const user = makeRemoteUserCreate()
  //   const auth = await authentication.signUp(params)
  //   const { data, error } = await user.create({
  //     credential: auth.credential,
  //     username: params.username,
  //   })

  //   return { data, error }
  // }

  async function handlerAuthSignUp(params: IAddAccount.Params) {
    const auth = makeRemoteAddAccount()
    return await auth.register(params)
  }

  async function handlerAddAccount(params: IAddAccount.Params) {
    setUserLoading(true)

    try {
      const { data, error } = await handlerAuthSignUp(params)
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
