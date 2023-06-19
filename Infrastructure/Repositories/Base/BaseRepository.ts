import {Sequelize} from "sequelize";
import {BaseEntity} from "../../../Common/Models/Base/BaseEntity";
import {DatabaseContext} from "../../DatabaseContexts/DatabaseContext";
import {IBaseRepository} from "./Abstractions/IBaseRespository";

/**
 * A base class for repositories that handle CRUD operations for entities.
 * @template T The type of the entity
 */
export class BaseRepository<T extends BaseEntity<T>> implements IBaseRepository<T>{
    /**
     * The model class that represents the entity type.
     * It is initialized with the BaseEntity class and cast to the entity type.
     */
    protected model: typeof BaseEntity;

    /**
     * Creates a new repository with the given sequelize instance.
     * @param databaseContext The sequelize instance to use
     */
    public constructor(databaseContext: DatabaseContext) {
        this.model = BaseEntity.initModel<T>(databaseContext.getSequelize()) as typeof BaseEntity;
    }

    /**
     * Creates a new entity with the given data.
     * @param data The data to create the entity with
     * @returns The created entity or null if failed
     */
    public async createEntity(data: T): Promise<BaseEntity<T> | null> {
        return await this.model.create({data});
    }

    /**
     * Gets an entity by its id.
     * @param id The id of the entity to get
     * @returns The entity or null if not found
     */
    public async getEntityById(id: number): Promise<BaseEntity<T> | null> {
        return await this.model.findByPk(id);
    }

    /**
     * Gets a list of all entities of this type.
     * @returns A List of entities of this type
     */
    public async getAllEntities(): Promise<BaseEntity<T>[] | null> {
        return await this.model.findAll({raw: true});
    }

    /**
     * Updates an entity by its id with the given data.
     * @param id The id of the entity to update
     * @param data The data to update the entity with
     * @returns The updated entity or null if not found
     */
    public async updateEntity(id: number, data: T): Promise<BaseEntity<T> | null> {
        await this.model.update(data, {where: {id}});
        return await this.getEntityById(id);
    }

    /**
     * Deletes an entity by its id.
     * @param id The id of the entity to delete
     */
    public async deleteEntity(id: number): Promise<void> {
        await this.model.destroy({where: {id}});
        return;
    }
}
