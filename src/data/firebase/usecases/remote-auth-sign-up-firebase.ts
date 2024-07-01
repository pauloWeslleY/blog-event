import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { IAuth, IFirebaseAuth, ISignUp } from '@/data/firebase'

class RemoteAuthSignUp implements IAuth.SignUpAuth {
  public signUp = {} as ISignUp.Model<UserCredential>

  async authSignUp(
    auth: Auth,
    params: IFirebaseAuth.Params,
  ): Promise<ISignUp.Model<UserCredential>> {
    const { email, password } = params
    await createUserWithEmailAndPassword(auth, email, password)
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

export { RemoteAuthSignUp }
