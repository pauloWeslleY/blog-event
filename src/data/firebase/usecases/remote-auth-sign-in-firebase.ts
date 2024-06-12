import { Auth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { IFirebaseAuth, ISignIn } from '@/data/firebase'

class RemoteAuthSignIn implements ISignIn<Auth, ISignIn.Model<UserCredential>> {
  public signIn = {} as ISignIn.Model<UserCredential>

  async authSignIn(
    auth: Auth,
    params: IFirebaseAuth.Params,
  ): Promise<ISignIn.Model<UserCredential>> {
    const { email, password } = params
    await signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        this.signIn = {
          user,
          error: null,
        }
      })
      .catch((err) => {
        const errorCode = err.code
        const errorMessage = err.message

        this.signIn = {
          user: null,
          error: {
            errorCode,
            errorMessage,
          },
        }
      })

    return this.signIn
  }
}

export { RemoteAuthSignIn }
