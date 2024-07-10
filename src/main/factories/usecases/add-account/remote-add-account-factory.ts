import { RemoteAdd } from '@/core/usecases'
import { IAdd, IAddAccount } from '@/domain/interfaces'
import { makeAxiosHttpClient } from '@/main/factories/http'

type RemoteAddAccountType = IAdd<IAddAccount.Params, IAddAccount.Model>

export function makeRemoteAddAccount(url: string): RemoteAddAccountType {
  return new RemoteAdd<IAddAccount.Params, IAddAccount.Model>(
    url,
    makeAxiosHttpClient(),
  )
}
