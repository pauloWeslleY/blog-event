import { UseMutationResult } from '@tanstack/react-query'
import { IUserSignIn } from '@/core/user'
import { IAuthSignIn, IAuthSignUp } from '@/core/authentication'

export type UserAuthType = {
  signUp: UseMutationResult<void, Error, IAuthSignUp.Params, unknown>
  signIn: UseMutationResult<
    void | IUserSignIn.Model,
    Error,
    IAuthSignIn.Params,
    unknown
  >
  handleLogout: () => Promise<void>
}
