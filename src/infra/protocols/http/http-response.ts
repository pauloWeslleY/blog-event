import { HttpStatusCode } from './index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body: T
}
