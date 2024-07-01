import { IError, RemoteError } from '@/data/error'

export const makeRemoteError = (): IError => {
  return new RemoteError()
}
