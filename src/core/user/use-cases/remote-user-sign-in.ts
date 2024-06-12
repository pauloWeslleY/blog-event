import { IAuthSignIn } from '@/core/authentication'
import { IUserSignIn } from '@/core/user'
import { AuthErrorCode, AuthErrors } from '@/data/error'

export class RemoteUserSignIn implements IUserSignIn {
  constructor(
    private auth: IAuthSignIn,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async login(params: IUserSignIn.Params): Promise<IUserSignIn.Model> {
    const login = await this.auth.signIn(params)
    const { data } = login

    if (
      data.error?.errorCode === AuthErrorCode.TOO_MANY_REQUESTS ||
      data.user === null
    ) {
      return new AuthErrors.TooManyRequestsError().message
    }

    if (
      data.error?.errorCode === AuthErrorCode.USER_NOT_FOUND ||
      data.user === null
    ) {
      return new AuthErrors.UserNotFound().message
    }

    if (
      data.error?.errorCode === AuthErrorCode.INVALID_PASSWORD_WRONG ||
      data.user === null
    ) {
      return new AuthErrors.InvalidPasswordWrongError().message
    }

    return data.user
  }
}
