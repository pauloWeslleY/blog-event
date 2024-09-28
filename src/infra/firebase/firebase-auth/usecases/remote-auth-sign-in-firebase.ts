import { Auth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { IFirebaseAuth, ISignIn } from '@/infra/firebase'

export class RemoteAuthSignIn implements ISignIn<UserCredential> {
  private authResponse: ISignIn.Model<UserCredential>

  constructor(private readonly auth: Auth) {
    this.authResponse = { credential: null, error: null }
  }

  async signIn(
    params: IFirebaseAuth.Params,
  ): Promise<ISignIn.Model<UserCredential>> {
    const { email, password } = params
    await signInWithEmailAndPassword(this.auth, email, password)
      .then((user) => {
        this.authResponse = { credential: user, error: null }
      })
      .catch((error: FirebaseError) => {
        this.authResponse = { credential: null, error }
      })

    return this.authResponse
  }
}
