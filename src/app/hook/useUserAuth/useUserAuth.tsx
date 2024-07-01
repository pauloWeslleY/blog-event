import { useRouter } from 'next/navigation'
import {
  makeRemoteError,
  makeRemoteSignOut,
  makeRemoteUserAuthSignIn,
  makeRemoteUserAuthSignUp,
} from '@/main/factories/usecases'
import {
  useUserAuthSignInStore,
  useUserAuthStore,
  useUserStore,
} from '@/main/store'
import { IAuthSignIn, IAuthSignUp } from '@/core/authentication'
import { logoutCurrentUserAdapter } from '@/main/adapters/user-logged-adapter'
import { UserAuthType } from './types'

const useUserAuth = (): UserAuthType => {
  const userAuthSignUp = makeRemoteUserAuthSignUp()
  const userAuthSignIn = makeRemoteUserAuthSignIn()
  const userAuthSignOut = makeRemoteSignOut()
  const router = useRouter()
  const { setLogout } = useUserStore()
  const { setUserAuth } = useUserAuthStore()
  const { setUserAuthSignIn } = useUserAuthSignInStore()
  const isError = makeRemoteError()

  const signUp = async (params: IAuthSignUp.Params) => {
    const response = await userAuthSignUp.register(params)
    const errSignUp = isError.isVerifyErrorMessage(response)
    setUserAuth(response)

    if (errSignUp !== '') {
      return errSignUp
    }

    return router.push('/')
  }

  const signIn = async (params: IAuthSignIn.Params) => {
    const response = await userAuthSignIn.login(params)
    const errSignIn = isError.isVerifyErrorMessage(response)
    setUserAuthSignIn(response)

    if (errSignIn !== '') {
      return errSignIn
    }

    return router.push('/')
  }

  const handleLogout = async () => {
    await userAuthSignOut.logOut()
    logoutCurrentUserAdapter()
    setLogout()
  }

  return { signUp, signIn, handleLogout }
}

export { useUserAuth }
