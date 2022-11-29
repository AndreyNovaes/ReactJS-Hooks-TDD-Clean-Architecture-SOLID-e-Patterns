export enum HttpStatusCode {
  unauthorized = 401,
  ok = 200,
  noContent = 204,
}

export type HttpResponse = {
  statusCode: number
  body?: any
}