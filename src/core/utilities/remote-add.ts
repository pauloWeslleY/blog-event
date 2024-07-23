import { Errors } from '@/domain/errors'
import { HttpRequest, HttpStatusCode } from '@/infra/protocols/http'

export class RemoteAdd<P, R> implements IAdd<P, R> {
  constructor(
    private readonly url: string,
    private readonly httpRequest: HttpRequest<RemoteAdd.Model<R>>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async add(params: P): Promise<RemoteAdd.Model<R>> {
    const httpResponse = await this.httpRequest.request({
      url: this.url,
      method: 'POST',
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

export namespace RemoteAdd {
  export type Model<R> = R
}
