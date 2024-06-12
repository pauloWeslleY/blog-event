import { AuthErrors } from '@/data/error'

export const makeErrorsUserNotFound = (): AuthErrors.UserNotFound => {
  return new AuthErrors.UserNotFound()
}
