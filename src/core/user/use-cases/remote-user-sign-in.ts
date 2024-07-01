import { IAuthSignIn } from '@/core/authentication'
import { IUserSignIn } from '@/core/user'
import { Errors, FirebaseErrorCode, FirebaseErrors } from '@/data/error'

export class RemoteUserSignIn implements IUserSignIn {
  constructor(
    private auth: IAuthSignIn,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async login(params: IUserSignIn.Params): Promise<IUserSignIn.Model> {
    const { data } = await this.auth.signIn(params)

    switch (data.error?.errorCode) {
      case '':
        if (data.user) {
          return data.user
        }
        return ''
      case FirebaseErrorCode.TOO_MANY_REQUESTS:
        return new FirebaseErrors.TooManyRequestsError().message
      case FirebaseErrorCode.USER_NOT_FOUND:
        return new FirebaseErrors.UserNotFound().message
      case FirebaseErrorCode.INVALID_PASSWORD_WRONG:
        return new FirebaseErrors.InvalidPasswordWrongError().message

      default:
        return new Errors.UnexpectedError().message
    }
  }
}
