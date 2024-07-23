import { IUserList } from '@/data/firebase'
import { Errors } from '@/domain/errors'
import { HttpRequest, HttpStatusCode } from '@/infra/protocols/http'

export class RemoteListUser implements IUserList {
  constructor(
    private readonly url: string,
    private readonly httpRequest: HttpRequest<RemoteListUser.Model>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async getUserList(): Promise<RemoteListUser.Model> {
    const httpResponse = await this.httpRequest.request({
      url: this.url,
      method: 'GET',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new Errors.InvalidCredentialsError()
      default:
        throw new Errors.UnexpectedError()
    }
  }
}

export namespace RemoteListUser {
  export type Model = IUserList.Model[]
}
