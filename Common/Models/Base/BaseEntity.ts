import {DataTypes, Model, Sequelize} from "sequelize";

/**
 * A base class for entities that have an id property.
 * @template T The type of the entity
 */
export class BaseEntity<T> extends Model {
    /**
     * Initializes the model with the given sequelize instance.
     * @param sequelize The sequelize instance to use
     * @returns The initialized model
     */
    public static initModel<T>(sequelize: Sequelize): typeof BaseEntity {
        super.init({
            id: {
                type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
            }
        }, {
            sequelize: sequelize, modelName: 'BaseEntity',
        });
        return this as typeof BaseEntity;
    }
}
