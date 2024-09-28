import { Auth, signOut } from 'firebase/auth'
import { ISignOut } from '@/infra/firebase'

export class RemoteAuthSignOut implements ISignOut {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly auth: Auth) {}

  async signOut(): Promise<void> {
    await signOut(this.auth)
  }
}
