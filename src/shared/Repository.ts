import { Entity } from "./Entity";

export interface RepositoryInterface<E extends Entity> {
    save (props: E): Promise<void>
    findOne (id: number): Promise<E> 
}