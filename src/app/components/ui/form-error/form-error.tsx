'use client'

import { Alert } from '@/app/components/ui'
import { AccountModel } from '@/domain/models'
import { makeRemoteError } from '@/main/factories/usecases'

type FormErrorType = {
  error: AccountModel | undefined | string
}

const FormError = ({ error }: FormErrorType) => {
  const isError = makeRemoteError()
  const formIsError = isError.isVerifyErrorMessage(error)

  return formIsError !== '' && <Alert message={formIsError} />
}

export { FormError }
