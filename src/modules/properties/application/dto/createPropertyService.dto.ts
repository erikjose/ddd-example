import { AddressProperties, Property } from "../../domain/entities/Property";

export type CreatePropertyOutput = {
    id: number
    amount: number
    address: AddressProperties
} 

export class CreatePropertOutputMapper {
    private constructor () {}

    static output (props: Property): CreatePropertyOutput {
        return {
            id: props.id,
            amount: props.amount,
            address: {
                number: props.address.number,
                street: props.address.street 
            }
        }
    }
}