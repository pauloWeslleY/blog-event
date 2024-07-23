import { Errors } from '@/domain/errors'
import { IDetailEvent } from '@/domain/interfaces'
import { HttpRequest, HttpStatusCode } from '@/infra/protocols/http'

export class RemoteEventDetails implements IDetailEvent {
  constructor(
    private readonly url: string,
    private readonly httpRequest: HttpRequest<RemoteEventDetails.Model>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async getEventDetail(): Promise<RemoteEventDetails.Model> {
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

export namespace RemoteEventDetails {
  export type Model = IDetailEvent.Model
}
