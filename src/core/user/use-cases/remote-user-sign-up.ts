import { UserCredential } from 'firebase/auth'
import { IAuthSignUp } from '@/core/authentication'
import { IUser, IUserSignUp } from '@/core/user'
import { AuthErrorCode, AuthErrors } from '@/data/error'

export class RemoteUserSignUp implements IUserSignUp {
  constructor(
    private auth: IAuthSignUp,
    private user: IUser,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async register(params: IUserSignUp.Params): Promise<IUserSignUp.Model> {
    const register = await this.auth.signUp(params)
    const { data, username } = register

    if (
      data.error?.errorCode === AuthErrorCode.EMAIL_ALREADY_IN_USE ||
      data.user === null
    ) {
      return new AuthErrors.EmailAlreadyInUse().message
    }

    if (
      data.error?.errorCode === AuthErrorCode.INVALID_PASSWORD_WEAK ||
      data.user === null
    ) {
      return new AuthErrors.InvalidPasswordWeakError().message
    }

    const user = await this.user.create({
      data: data?.user || ({} as UserCredential),
      username,
    })

    return user
  }
}
