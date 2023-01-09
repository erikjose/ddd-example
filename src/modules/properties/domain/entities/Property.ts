import { Entity } from "../../../../shared/Entity";

export type AddressProperties = {
    street: string
    number: string
}

export class Address {
    private props: AddressProperties

    constructor (props: AddressProperties) {
        this.props = props
    }

    get street (): string {
        return 'adfa'
    }

    get number (): string {
        return 'afda'
    }

    get AddressFull (): string {
        return `${this.street} ${this.number}`
    }
} 

export type PropertyProperties = {
    id: number
    amount: number
    status: string
    address?: Address
}

export class Property extends Entity<PropertyProperties> {
    private constructor (props: PropertyProperties) {
        super (props, props.id)
    }

    get id (): number {
        return this.id
    }

    get amount (): number {
        return this.amount
    }

    get address (): Address {
        return this.address
    }

    static createPropert (props: PropertyProperties): Property {
        Property.validator(props)

        return new Property(props) 
    }

    static validator (props: PropertyProperties): void {
        if (!props.amount) {
            throw new Error()
        }

        if (!props.status) {
            throw new Error()
        }
    }
}