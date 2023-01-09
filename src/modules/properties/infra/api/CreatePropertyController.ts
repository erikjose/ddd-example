import { Controller } from "../../../../shared/Controller";
import { HttpRequest, HttpResponse } from "../../../../shared/Http";
import { ServiceInterface } from "../../../../shared/Service";
import { CreatePropertyOutput } from "../../application/dto/createPropertyService.dto";
import { PropertyProperties } from "../../domain/entities/Property";

type Input = PropertyProperties

type Output = CreatePropertyOutput

export class CreatePropertyController implements Controller {
    constructor (
        private readonly CreatePropertyService: ServiceInterface<Input, Output>
    ) {}

    async handle(props: HttpRequest): Promise<HttpResponse> {
        const createPropertyOrFail = await this.CreatePropertyService.execute({
            amount: props.body.amount,
            id: props.body.id,
            status: props.body.status
        })
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