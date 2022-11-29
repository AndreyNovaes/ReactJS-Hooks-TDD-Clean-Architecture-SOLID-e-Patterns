import { HttpPostClient } from "@/data/protocols/http/http-post-client"
import { InvalidCredentialsError } from "@/domain/errors/InvalidCredentialsError"
import { AuthenticationParams } from "@/domain/usecases/authenticate"

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
    ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case 401:
        throw new InvalidCredentialsError()
      default:
        return Promise.resolve()
    }
  }
}
