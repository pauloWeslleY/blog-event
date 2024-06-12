import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import {
  makeRemoteSignOut,
  makeRemoteUserAuthSignIn,
  makeRemoteUserAuthSignUp,
} from '@/main/factories/usecases'
import {
  useUserAuthSignInStore,
  useUserAuthStore,
  useUserStore,
} from '@/main/store'
import { useErrors } from '@/app/hook'
import { IAuthSignIn, IAuthSignUp } from '@/core/authentication'
import { UserAuthType } from './types'

const useUserAuth = (): UserAuthType => {
  const userAuthSignUp = makeRemoteUserAuthSignUp()
  const userAuthSignIn = makeRemoteUserAuthSignIn()
  const userAuthSignOut = makeRemoteSignOut()
  const router = useRouter()
  const { setLogout } = useUserStore()
  const { setUserAuth } = useUserAuthStore()
  const { setUserAuthSignIn } = useUserAuthSignInStore()
  const { emailAlreadyInUse, userNotFound, toManyRequests } = useErrors()

  const signUp = useMutation({
    mutationFn: async (params: IAuthSignUp.Params) => {
      const response = await userAuthSignUp.register(params)
      setUserAuth(response)

      if (response !== emailAlreadyInUse.message) {
        return router.push('/')
      }
    },
  })

  const signIn = useMutation({
    mutationFn: async (params: IAuthSignIn.Params) => {
      const response = await userAuthSignIn.login(params)
      setUserAuthSignIn(response)

      if (response === userNotFound.message) {
        return userNotFound.message
      }

      if (response === toManyRequests.message) {
        return toManyRequests.message
      }

      return router.push('/')
    },
  })

  const handleLogout = async () => {
    await userAuthSignOut.logOut()
    setLogout()
  }

  return { signUp, signIn, handleLogout }
}

export { useUserAuth }
