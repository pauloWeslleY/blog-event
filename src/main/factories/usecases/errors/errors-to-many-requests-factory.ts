import { AuthErrors } from '@/data/error'

export const makeErrorsToManyRequests = (): AuthErrors.TooManyRequestsError => {
  return new AuthErrors.TooManyRequestsError()
}
