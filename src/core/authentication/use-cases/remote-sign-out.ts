import { Auth } from 'firebase/auth'
import { IAuthSignOut } from '@/core/authentication'
import { IFirebase, ISignOut } from '@/data/firebase'

export class RemoteSignOut implements IAuthSignOut {
  constructor(
    private database: IFirebase,
    private auth: ISignOut<Auth>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async logOut(): Promise<void> {
    return await this.auth.signOut(this.database.auth())
  }
}
