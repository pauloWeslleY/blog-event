import { Errors } from '@/domain/errors'
import { HttpRequest, HttpStatusCode } from '@/infra/protocols/http'

export class RemoteDelete<R> implements IRemove<R> {
  constructor(
    private readonly url: string,
    private readonly httpRequest: HttpRequest<RemoteDelete.Model<R>>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async remove(): Promise<RemoteDelete.Model<R>> {
    const httpResponse = await this.httpRequest.request({
      url: this.url,
      method: 'DELETE',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.noContent:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new Errors.InvalidCredentialsError()
      default:
        throw new Errors.UnexpectedError()
    }
  }
}

export namespace RemoteDelete {
  export type Model<R> = R
}
