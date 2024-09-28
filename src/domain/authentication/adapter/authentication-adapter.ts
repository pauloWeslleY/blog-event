import { UserCredential } from 'firebase/auth'
import { AccountModel } from '@/data/models'

export function authenticationAdapter(
  credential: UserCredential | null,
  token: string | undefined,
): AccountModel | null {
  if (!credential || !token) {
    return null
  }

  if (!credential.user.email || !credential.user.displayName) {
    return null
  }

  return {
    id: credential.user.uid,
    email: credential.user.email,
    username: credential.user.displayName,
    accessToken: token,
  }
}
