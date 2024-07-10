import { FirebaseErrorCode, FirebaseErrors } from '@/data/error'
import { IAuth, IAuthToken, IUserSignIn } from '@/data/firebase'
import { Errors } from '@/domain/errors'

export class RemoteUserSignIn implements IUserSignIn {
  constructor(
    private auth: IAuth.SignInAuth,
    private token: IAuthToken,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async login(params: IUserSignIn.Params): Promise<IUserSignIn.Model> {
    const { user: userAuth, error } = await this.auth.authSignIn(params)
    const token = await this.token.loadAuthToken()
    const user = userAuth?.user

    switch (error?.errorCode) {
      case undefined:
        if (user) {
          return {
            id: user.uid,
            username: user.displayName || '',
            email: user.email || '',
            accessToken: token,
          }
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
