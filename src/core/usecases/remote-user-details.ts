import { Errors } from '@/domain/errors'
import { IUserDetails } from '@/domain/interfaces'
import { HttpRequest, HttpStatusCode } from '@/infra/protocols/http'

export class RemoteUserDetails implements IUserDetails {
  constructor(
    private readonly url: string,
    private readonly httpRequest: HttpRequest<RemoteUserDetails.Model>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async getUserDetail(): Promise<IUserDetails.Model> {
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

export namespace RemoteUserDetails {
  export type Model = IUserDetails.Model
}
