import { Auth } from 'firebase/auth'
import { IAuthToken } from '@/infra/firebase'

export class RemoteAuthToken implements IAuthToken {
  protected token: string

  constructor(private readonly auth: Auth) {
    this.token = ''
  }

  async loadAuthToken(): Promise<string> {
    await this.auth.currentUser
      ?.getIdToken()
      .then((token) => (this.token = token))
      .catch((err) => (this.token = err))

    return this.token
  }
}
