import {BaseEntity} from "../../../../Common/Models/Base/BaseEntity";

/**
 * An interface for repositories that handle CRUD operations for entities.
 * @template T The type of the entity
 */
export interface IBaseRepository<T extends BaseEntity<T>> {

    // Creates a new entity with the given data
    createEntity(data: T): Promise<BaseEntity<T> | null>;

    // Gets an entity by its id
    getEntityById(id: number): Promise<BaseEntity<T> | null>;

    // Gets a list of all entities of this type
    getAllEntities(): Promise<BaseEntity<T>[] | null>;

    // Updates an entity by its id with the given data
    updateEntity(id: number, data: T): Promise<BaseEntity<T> | null>;

    // Deletes an entity by its id
    deleteEntity(id: number): Promise<void>;
}