import { Auth, signOut } from 'firebase/auth'
import { ISignOut } from '@/data/firebase'

export class RemoteAuthSignOut implements ISignOut<Auth> {
  async signOut(auth: Auth): Promise<void> {
    await signOut(auth)
  }
}
