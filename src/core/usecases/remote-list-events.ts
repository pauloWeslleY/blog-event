import { IEventList } from '@/data/firebase'
import { Errors } from '@/domain/errors'
import { HttpRequest, HttpStatusCode } from '@/infra/protocols/http'

export class RemoteListEvents implements IEventList {
  constructor(
    private readonly url: string,
    private readonly httpRequest: HttpRequest<RemoteListEvents.Model>,
    // eslint-disable-next-line prettier/prettier
  ) { }

  async getListEvent(): Promise<RemoteListEvents.Model> {
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

export namespace RemoteListEvents {
  export type Model = IEventList.Model[]
}
