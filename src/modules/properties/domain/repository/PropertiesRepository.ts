import { RepositoryInterface } from "../../../../shared/Repository";
import { Property } from "../entities/Property";

export interface PropertyRepository<E extends Property> extends RepositoryInterface<E> {
    updateStatus (status: string): Promise<void>
}