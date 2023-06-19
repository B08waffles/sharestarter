import {BaseEntity} from "../../../../Common/Models/Base/BaseEntity";

/**
 * An interface for services that handle business logic for entities.
 * @template T The type of the entity
 */
export interface IBaseService<T> {
    // Creates a new entity with the given data
    createEntity(data: BaseEntity<T>): Promise<BaseEntity<T> | null>;

    // Gets an entity by its id
    getEntityById(id: number): Promise<BaseEntity<T> | null>;

    // Gets all entities
    getAllEntities(): Promise<BaseEntity<T>[] | null>;

    // Updates an entity by its id with the given data
    updateEntity(id: number, data: BaseEntity<T>): Promise<BaseEntity<T> | null>;

    // Deletes an entity by its id
    deleteEntity(id: number): Promise<void>;
}
