import { Auth, signOut } from 'firebase/auth'
import { IAuth } from '@/data/firebase'

export class RemoteAuthSignOut implements IAuth.SignOutAuth {
  async signOut(auth: Auth): Promise<void> {
    await signOut(auth)
  }
}
