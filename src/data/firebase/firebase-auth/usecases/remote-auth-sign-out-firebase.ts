import { Auth, signOut } from 'firebase/auth'
import { ISignOut } from '@/data/firebase'

export class RemoteAuthSignOut implements ISignOut {
  // eslint-disable-next-line prettier/prettier
  constructor(private auth: Auth) { }

  async signOut(): Promise<void> {
    await signOut(this.auth)
  }
}
