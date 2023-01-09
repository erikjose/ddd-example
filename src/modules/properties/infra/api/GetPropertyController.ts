import { Controller } from "../../../../shared/Controller";
import { HttpRequest, HttpResponse } from "../../../../shared/Http";
import { ServiceInterface } from "../../../../shared/Service";
import { CreatePropertyOutput } from "../../application/dto/createPropertyService.dto";
import { PropertyProperties } from "../../domain/entities/Property";

type Input = number

type Output = CreatePropertyOutput

export class GetPropertyController implements Controller {
    constructor (
        private readonly GetPropertyService: ServiceInterface<Input, Output>
    ) {}

    async handle(props: HttpRequest): Promise<HttpResponse> {
        const createPropertyOrFail = await this.GetPropertyService.execute(props.params.id)
        if (!createPropertyOrFail) {
            return {
                statusCode: 400,
                body: new Error()
            }
        }

        return {
            statusCode: 200
        }
    }
} 