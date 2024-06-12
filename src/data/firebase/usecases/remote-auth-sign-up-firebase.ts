import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'
import { IFirebaseAuth, ISignUp } from '@/data/firebase'

class RemoteAuthSignUp implements ISignUp<Auth, ISignUp.Model<UserCredential>> {
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
        const errorCode = err.code
        const errorMessage = err.message

        this.signUp = {
          user: null,
          error: {
            errorCode,
            errorMessage,
          },
        }
      })

    return this.signUp
  }
}

export { RemoteAuthSignUp }
