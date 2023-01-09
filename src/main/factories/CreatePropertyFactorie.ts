import { CreatePropertyService } from "../../modules/properties/application/services/createPropertyService";
import { CreatePropertyController } from "../../modules/properties/infra/api/CreatePropertyController";
import { PGPropertyRepository } from "../../modules/properties/infra/databases/PGPropertyRepository";

export const CreatePropertyControllerFactorie = (): CreatePropertyController => {
    const DBProperty = new PGPropertyRepository()

    const service = new CreatePropertyService(DBProperty) 

    return new CreatePropertyController(service)
}