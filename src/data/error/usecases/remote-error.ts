import { FirebaseError } from 'firebase/app'
import { FirebaseErrorCode, FirebaseErrors } from '@/data/error'

export interface IError {
  getError(params: string | undefined): FirebaseError | null
}

export class RemoteError implements IError {
  getError(params: string | undefined): FirebaseError | null {
    if (!params) {
      return null
    }

    switch (params) {
      case FirebaseErrorCode.USER_NOT_FOUND:
        return new FirebaseErrors.UserNotFound()
      case FirebaseErrorCode.INVALID_CREDENTIAL:
        return new FirebaseErrors.InvalidCredentialError()
      case FirebaseErrorCode.EMAIL_ALREADY_IN_USE:
        return new FirebaseErrors.EmailAlreadyInUse()
      case FirebaseErrorCode.INVALID_PASSWORD_WRONG:
        return new FirebaseErrors.InvalidPasswordWrongError()
      case FirebaseErrorCode.INVALID_PASSWORD_WEAK:
        return new FirebaseErrors.InvalidPasswordWeakError()
      case FirebaseErrorCode.TOO_MANY_REQUESTS:
        return new FirebaseErrors.TooManyRequestsError()
      default:
        return new FirebaseErrors.UnexpectedError()
    }
  }
}
