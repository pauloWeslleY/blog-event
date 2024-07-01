'use client'

import { Alert } from '@/app/components/ui'
import { IUserSignIn, IUserSignUp } from '@/core/user'
import { makeRemoteError } from '@/main/factories/usecases'

type FormErrorType = {
  error: IUserSignIn.Model | IUserSignUp.Model
}

const FormError = ({ error }: FormErrorType) => {
  const isError = makeRemoteError()
  const formIsError = isError.isVerifyErrorMessage(error)

  return formIsError !== '' && <Alert message={formIsError} />
}

export { FormError }
