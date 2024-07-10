/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponse } from './index'

type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

export type HttpRequestParams = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
  params?: any
  responseType?: any
}

export interface HttpRequest<R = any> {
  request: (data: HttpRequestParams) => Promise<HttpResponse<R>>
}
