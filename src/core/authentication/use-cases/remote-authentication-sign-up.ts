import { Auth, UserCredential } from 'firebase/auth'
import { IAuthSignUp } from '@/core/authentication'
import { IFirebase, ISignUp } from '@/data/firebase'

export class RemoteAuthenticationSignUp implements IAuthSignUp {
  constructor(
    private database: IFirebase,
    private auth: ISignUp<Auth, ISignUp.Model<UserCredential>>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async signUp(params: IAuthSignUp.Params): Promise<IAuthSignUp.Model> {
    const { email, password, username } = params

    const response = await this.auth.authSignUp(this.database.auth(), {
      email,
      password,
    })

    return {
      username,
      data: response,
    }
  }
}
