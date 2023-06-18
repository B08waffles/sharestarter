import {BaseRepository} from "../../Repositories/Base/BaseRepository";
import {BaseEntity} from "../../../Common/Models/Base/BaseEntity";
import {IBaseService} from "./Abstractions/IBaseService";

/**
 * A base class for services that handle business logic for entities.
 * @template T The type of the entity
 */
export class BaseService<T> implements IBaseService<T> {
    private baseRepository: BaseRepository<BaseEntity<T>>;

    /**
     * Creates a new service with the given repository instance.
     * @param baseRepository The repository instance to use
     */
    public constructor(baseRepository: BaseRepository<BaseEntity<T>>) {
        this.baseRepository = baseRepository;
    }

    /**
     * Creates a new entity with the given data.
     * @param data The data to create the entity with
     * @returns The created entity or null if failed
     */
    public async createEntity(data: BaseEntity<T>): Promise<BaseEntity<T> | null> {
        return await this.baseRepository.createEntity(data);
    }

    /**
     * Gets an entity by its id.
     * @param id The id of the entity to get
     * @returns The entity or null if not found
     */
    public async getEntity(id: number): Promise<BaseEntity<T> | null> {
        return await this.baseRepository.getEntityById(id);
    }

    /**
     * Gets all entities.
     * @returns A list/array of entities or null if none found
     */
    public async getAllEntities(): Promise<BaseEntity<T>[] | null> {
        return await this.baseRepository.getAllEntities();
    }

    /**
     * Updates an entity by its id with the given data.
     * @param id The id of the entity to update
     * @param data The data to update the entity with
     * @returns The updated entity or null if not found
     */
    public async updateEntity(id: number, data: BaseEntity<T>): Promise<BaseEntity<T> | null> {
        return await this.baseRepository.updateEntity(id, data);
    }

    /**
     * Deletes an entity by its id.
     * @param id The id of the entity to delete
     */
    public async deleteEntity(id: number): Promise<void> {
        await this.baseRepository.deleteEntity(id);
    }
}
