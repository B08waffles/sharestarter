import {DataTypes, Sequelize} from "sequelize";
import {BaseEntity} from "./Base/BaseEntity";

/**
 * Represents a User entity with attributes and methods.
 * @extends BaseEntity<User>
 */
export class User extends BaseEntity<User> {
    /**
     * Initializes the User model with the given sequelize instance and attributes.
     * @param sequelize The sequelize instance to use.
     */
    public static initModel(sequelize: Sequelize): typeof BaseEntity<User>{
        super.init({
            id: {
                type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
            }, name: {
                type: DataTypes.STRING, allowNull: false
            }, email: {
                type: DataTypes.STRING, allowNull: false, unique: true
            }, password: {
                type: DataTypes.STRING, allowNull: false
            },
        }, {
            sequelize: sequelize,
            modelName: 'User'
        });
        return User as typeof BaseEntity<User>;
    }
}