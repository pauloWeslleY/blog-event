import { UserCredential } from 'firebase/auth'
import { FirebaseErrorCode, FirebaseErrors } from '@/data/error'
import { IAuth, IUser, IUserSignUp } from '@/data/firebase'
import { Errors } from '@/domain/errors'

export class RemoteUserSignUp implements IUserSignUp {
  constructor(
    private auth: IAuth.SignUpAuth,
    private user: IUser,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async register(params: IUserSignUp.Params): Promise<IUserSignUp.Model> {
    const { user, error } = await this.auth.authSignUp(params)

    switch (error?.errorCode) {
      case undefined:
        return await this.user.create({
          data: user || ({} as UserCredential),
          username: params.username,
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
