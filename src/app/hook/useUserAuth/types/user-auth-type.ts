import { IAuthSignIn, IAuthSignUp } from '@/core/authentication'

export type UserAuthType = {
  signUp: (params: IAuthSignUp.Params) => Promise<string | void>
  signIn: (params: IAuthSignIn.Params) => Promise<string | void>
  handleLogout: () => Promise<void>
}
