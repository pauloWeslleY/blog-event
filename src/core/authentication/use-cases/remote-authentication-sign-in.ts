import { Auth, UserCredential } from 'firebase/auth'
import { IAuthSignIn } from '@/core/authentication'
import { IFirebase, ISignIn } from '@/data/firebase'

export class RemoteAuthenticationSignIn implements IAuthSignIn {
  constructor(
    private database: IFirebase,
    private auth: ISignIn<Auth, ISignIn.Model<UserCredential>>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async signIn(params: IAuthSignIn.Params): Promise<IAuthSignIn.Model> {
    const { email, password } = params

    const response = await this.auth.authSignIn(this.database.auth(), {
      email,
      password,
    })

    return {
      data: response,
    }
  }
}
