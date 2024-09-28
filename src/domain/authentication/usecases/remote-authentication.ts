import { UserCredential } from 'firebase/auth'
import { ISignIn } from '@/infra/firebase'
import { IAuthentication } from '@/data/usecases'
import { authenticationAdapter } from '../adapter/authentication-adapter'

interface RemoteAuthenticationDependencies {
  readonly auth: ISignIn<UserCredential>
}

export class RemoteAuthentication implements IAuthentication {
  private auth: ISignIn<UserCredential>

  constructor(
    protected readonly dependencies: RemoteAuthenticationDependencies,
  ) {
    this.auth = dependencies.auth
  }

  async authentication(
    params: IAuthentication.Params,
  ): Promise<RemoteAuthentication.Model> {
    const { credential, error } = await this.auth.signIn(params)
    const accessToken = await credential?.user.getIdToken()

    return {
      data: authenticationAdapter(credential, accessToken),
      error,
    }
  }
}

namespace RemoteAuthentication {
  export type Model = IAuthentication.Model
}
