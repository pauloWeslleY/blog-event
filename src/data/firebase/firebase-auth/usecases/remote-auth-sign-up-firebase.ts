import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { IAuth, IFirebaseAuth, ISignUp } from '@/data/firebase'

export class RemoteAuthSignUp implements IAuth.SignUpAuth {
  public signUp = {} as ISignUp.Model<UserCredential>

  // eslint-disable-next-line prettier/prettier
  constructor(private auth: Auth) { }

  async authSignUp(
    params: IFirebaseAuth.Params,
  ): Promise<ISignUp.Model<UserCredential>> {
    const { email, password } = params
    await createUserWithEmailAndPassword(this.auth, email, password)
      .then((user) => {
        this.signUp = {
          user,
          error: null,
        }
      })
      .catch((err) => {
        this.signUp = {
          user: null,
          error: {
            errorCode: err.code,
            errorMessage: err.message,
          },
        }
      })

    return this.signUp
  }
}
