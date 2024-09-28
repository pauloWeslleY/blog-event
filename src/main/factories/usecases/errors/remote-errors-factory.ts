import { FirebaseError } from 'firebase/app'
import { RemoteError } from '@/data/error'

export function makeRemoteError(
  params: string | undefined,
): FirebaseError | null {
  const error = new RemoteError()
  return error.getError(params)
}
