import { UseMutationResult } from '@tanstack/react-query'
import { ISignIn, IUserSignUp } from '@/data/firebase'
import { AccountModel } from '@/domain/models'

type UseAuthSignInType = UseMutationResult<
  AccountModel,
  Error,
  ISignIn.Params,
  unknown
>

type UseAuthSignUpType = UseMutationResult<
  AccountModel,
  Error,
  IUserSignUp.Params,
  unknown
>

type UseAuthProps = {
  authSignUp: UseAuthSignUpType
  authSignIn: UseAuthSignInType
}

export type { UseAuthProps }
