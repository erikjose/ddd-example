import { PropertyProperties } from "../../domain/entities/Property";
import { PropertyRepository } from "../../domain/repository/PropertiesRepository";
import { CreatePropertOutputMapper, CreatePropertyOutput } from "../dto/createPropertyService.dto";
import { Property } from '../../domain/entities/Property'
import { ServiceInterface } from "../../../../shared/Service";

export class CreatePropertyService implements ServiceInterface<PropertyProperties, CreatePropertyOutput> {
    constructor (
        private readonly PropertyRepository: PropertyRepository<Property>
    ){}
 
    async execute (props: PropertyProperties): Promise<CreatePropertyOutput> {
        const property = Property.createPropert(props)
        if (!property) {
            throw new Error() 
        }

        await this.PropertyRepository.save(property) 

        const result = CreatePropertOutputMapper.output(property)

        return result
    }
} 