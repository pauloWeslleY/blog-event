import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { FirebaseError } from 'firebase/app'
import { IFirebaseAuth, ISignUp } from '@/infra/firebase'

export class RemoteAuthSignUp implements ISignUp<UserCredential> {
  private authResponse: ISignUp.Model<UserCredential>

  constructor(private readonly auth: Auth) {
    this.authResponse = { credential: null, error: null }
  }

  async signUp({
    email,
    password,
  }: IFirebaseAuth.Params): Promise<ISignUp.Model<UserCredential>> {
    await createUserWithEmailAndPassword(this.auth, email, password)
      .then((user) => {
        this.authResponse = { credential: user, error: null }
      })
      .catch((err: FirebaseError) => {
        this.authResponse = { credential: null, error: err }
      })

    return this.authResponse
  }
}
