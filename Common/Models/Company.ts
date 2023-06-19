import {DataTypes, Sequelize,} from "sequelize";
import {BaseEntity} from "./Base/BaseEntity";

/**
 * Represents a Company entity with attributes and methods.
 * @extends BaseEntity<Company>
 */
export class Company extends BaseEntity<Company> {
    /**
     * Initializes the Company model with the given sequelize instance and attributes.
     * @param sequelize The sequelize instance to use.
     */
    public static initModel(sequelize: Sequelize): typeof BaseEntity<Company> {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            companyName: {
                type: DataTypes.STRING,
                allowNull:
                    false,
                unique:
                    true,
            },
            description: {
                type: DataTypes.TEXT,
                unique: true,
            }
        }, {
            sequelize: sequelize,
            modelName: 'Company'
        });
        return Company as typeof BaseEntity<Company>;
    }
}