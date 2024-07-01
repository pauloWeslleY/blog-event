import { UserCredential } from 'firebase/auth'
import { IAuthSignUp } from '@/core/authentication'
import { IUser, IUserSignUp } from '@/core/user'
import { Errors, FirebaseErrorCode, FirebaseErrors } from '@/data/error'

export class RemoteUserSignUp implements IUserSignUp {
  constructor(
    private auth: IAuthSignUp,
    private user: IUser,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async register(params: IUserSignUp.Params): Promise<IUserSignUp.Model> {
    const { data, username } = await this.auth.signUp(params)

    switch (data.error?.errorCode) {
      case '':
        return await this.user.create({
          data: data?.user || ({} as UserCredential),
          username,
        })
      case FirebaseErrorCode.EMAIL_ALREADY_IN_USE:
        return new FirebaseErrors.EmailAlreadyInUse().message
      case FirebaseErrorCode.INVALID_PASSWORD_WEAK:
        return new FirebaseErrors.InvalidPasswordWeakError().message
      default:
        return new Errors.UnexpectedError().message
    }
  }
}
