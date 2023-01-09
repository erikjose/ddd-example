import { HttpRequest, HttpResponse } from "./Http";

export interface Controller {
    handle (props: HttpRequest): Promise<HttpResponse>
}