import { FirebaseErrors, IError } from '@/data/error'
import { Errors } from '@/domain/errors'

export class RemoteError implements IError {
  private userNotFound = new FirebaseErrors.UserNotFound()
  private wrongPassword = new FirebaseErrors.InvalidPasswordWrongError()
  private weakPassword = new FirebaseErrors.InvalidPasswordWeakError()
  private emailAlreadyInUse = new FirebaseErrors.EmailAlreadyInUse()
  private toManyRequests = new FirebaseErrors.TooManyRequestsError()
  private unexpectedError = new Errors.UnexpectedError()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isVerifyErrorMessage(params: any): string {
    switch (params) {
      case this.userNotFound.message:
        return this.userNotFound.message
      case this.emailAlreadyInUse.message:
        return this.emailAlreadyInUse.message
      case this.wrongPassword.message:
        return this.wrongPassword.message
      case this.weakPassword.message:
        return this.weakPassword.message
      case this.toManyRequests.message:
        return this.toManyRequests.message
      case 'Algo de errado aconteceu. Tente novamente em breve':
        return this.unexpectedError.message
      default:
        return ''
    }
  }
}
