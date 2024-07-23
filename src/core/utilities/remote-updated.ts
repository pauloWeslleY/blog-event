import { Errors } from '@/domain/errors'
import { HttpRequest, HttpStatusCode } from '@/infra/protocols/http'

export class RemoteUpdate<P, R> implements IUpdated<P, R> {
  constructor(
    private readonly url: string,
    private readonly httpRequest: HttpRequest<RemoteUpdate.Model<R>>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async updated(params: P): Promise<RemoteUpdate.Model<R>> {
    const httpResponse = await this.httpRequest.request({
      url: this.url,
      method: 'PUT',
      body: params,
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

export namespace RemoteUpdate {
  export type Model<R> = R
}
