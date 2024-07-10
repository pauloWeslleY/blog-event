import { Auth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { IAuth, IFirebaseAuth, ISignIn } from '@/data/firebase'

export class RemoteAuthSignIn implements IAuth.SignInAuth {
  public signIn = {} as ISignIn.Model<UserCredential>

  // eslint-disable-next-line prettier/prettier
  constructor(private auth: Auth) { }

  async authSignIn(
    params: IFirebaseAuth.Params,
  ): Promise<ISignIn.Model<UserCredential>> {
    const { email, password } = params
    await signInWithEmailAndPassword(this.auth, email, password)
      .then((user) => {
        this.signIn = {
          user,
          error: null,
        }
      })
      .catch((err) => {
        this.signIn = {
          user: null,
          error: {
            errorCode: err.code,
            errorMessage: err.message,
          },
        }
      })

    return this.signIn
  }
}
