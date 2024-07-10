import { Errors } from '@/domain/errors'
import { IAuthentication } from '@/domain/interfaces'
import { HttpRequest, HttpStatusCode } from '@/infra/protocols/http'

export class RemoteAuthentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpRequest: HttpRequest<RemoteAuthentication.Model>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async authentication(
    params: IAuthentication.Params,
  ): Promise<RemoteAuthentication.Model> {
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

export namespace RemoteAuthentication {
  export type Model = IAuthentication.Model
}
