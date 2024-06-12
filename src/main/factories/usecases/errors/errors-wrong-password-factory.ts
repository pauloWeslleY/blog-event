import { AuthErrors } from '@/data/error'

const makeErrorsWrongPassword = (): AuthErrors.InvalidPasswordWrongError => {
  return new AuthErrors.InvalidPasswordWrongError()
}

export { makeErrorsWrongPassword }
