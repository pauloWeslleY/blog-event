import { Auth } from 'firebase/auth'
import { IAuthToken } from '@/data/firebase'

export class RemoteAuthToken implements IAuthToken {
  protected token: string = ''

  // eslint-disable-next-line prettier/prettier
  constructor(private auth: Auth) { }

  async loadAuthToken(): Promise<string> {
    await this.auth.currentUser
      ?.getIdToken()
      .then((token) => {
        this.token = token
      })
      .catch((err) => {
        this.token = err
      })

    return this.token
  }
}
