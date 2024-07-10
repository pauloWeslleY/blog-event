import { AxiosError, AxiosResponse } from 'axios'
import {
  HttpRequest,
  HttpRequestParams,
  HttpResponse,
} from '@/infra/protocols/http'
import { http } from '@/infra/config'

export class AxiosHttpClient implements HttpRequest {
  async request(data: HttpRequestParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await http.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
        responseType: data.responseType || 'json',
      })
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        axiosResponse = error.response
      } else {
        const _error = error as AxiosError<{ message: string }>
        throw new Error(_error?.response?.data.message)
      }
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data,
    }
  }
}
