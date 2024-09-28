import { UserCredential } from 'firebase/auth'
import { ISignUp } from '@/infra/firebase'
import { IAddAccount, IUserCreate } from '@/data/usecases'

export class RemoteAddAccount implements IAddAccount {
  constructor(
    private readonly auth: ISignUp<UserCredential>,
    private readonly user: IUserCreate,
  ) {}

  async register(params: IAddAccount.Params): Promise<RemoteAddAccount.Model> {
    const auth = await this.auth.signUp(params)
    const { data, error } = await this.user.create({
      credential: auth.credential,
      username: params.username,
    })

    return {
      data,
      error: error || auth.error,
    }
  }
}

namespace RemoteAddAccount {
  export type Model = IAddAccount.Model
}
