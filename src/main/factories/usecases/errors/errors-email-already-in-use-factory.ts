import { AuthErrors } from '@/data/error'

export const makeErrorsEmailAlreadyInUse = (): AuthErrors.EmailAlreadyInUse => {
  return new AuthErrors.EmailAlreadyInUse()
}
