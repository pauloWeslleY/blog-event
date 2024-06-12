import { AuthErrors } from '@/data/error'
import {
  makeErrorsEmailAlreadyInUse,
  makeErrorsToManyRequests,
  makeErrorsUserNotFound,
  makeErrorsWrongPassword,
} from '@/main/factories/usecases'

type ErrorsType = {
  emailAlreadyInUse: AuthErrors.EmailAlreadyInUse
  userNotFound: AuthErrors.UserNotFound
  wrongPassword: AuthErrors.InvalidPasswordWrongError
  toManyRequests: AuthErrors.TooManyRequestsError
}

const useErrors = (): ErrorsType => {
  const emailAlreadyInUse = makeErrorsEmailAlreadyInUse()
  const userNotFound = makeErrorsUserNotFound()
  const wrongPassword = makeErrorsWrongPassword()
  const toManyRequests = makeErrorsToManyRequests()

  return { emailAlreadyInUse, userNotFound, wrongPassword, toManyRequests }
}

export { useErrors }
