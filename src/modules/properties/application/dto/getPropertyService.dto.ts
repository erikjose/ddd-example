import { PropertyRepository } from "../../domain/repository/PropertiesRepository";
import { CreatePropertOutputMapper, CreatePropertyOutput } from "../dto/createPropertyService.dto";
import { Property } from '../../domain/entities/Property'
import { ServiceInterface } from "../../../../shared/Service";

export class GetPropertyService implements ServiceInterface<number, CreatePropertyOutput> {
    constructor (
        private readonly PropertyRepository: PropertyRepository<Property>
    ){}
 
    async execute (id: number): Promise<CreatePropertyOutput> {
        const property = await this.PropertyRepository.findOne(id)

        const result = CreatePropertOutputMapper.output(property)

        return result
    }
} 