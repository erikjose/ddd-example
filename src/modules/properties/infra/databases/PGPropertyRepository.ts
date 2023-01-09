import { Address, Property } from "../../domain/entities/Property";
import { PropertyRepository } from "../../domain/repository/PropertiesRepository";

export class PGPropertyRepository implements PropertyRepository<Property> {
    async save(props: Property): Promise<void> {
        
    }

    async findOne(id: number): Promise<Property> {
        const data = { 
            id: 1,
            amount: 150,
            status: 'done',
            address: {
                street: 'Rua X',
                number: '1'
            }
         }

         const address = new Address(data.address)

         return Property.createPropert({
            amount: data.amount,
            id: data.id,
            status: data.status,
            address: address
         })
    }

    async updateStatus(status: string): Promise<void> {
        
    }
}