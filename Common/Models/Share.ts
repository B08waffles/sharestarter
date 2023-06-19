import {DataTypes, Sequelize} from "sequelize";
import {BaseEntity} from "./Base/BaseEntity";

/*

class Share {
    private static totalShares = 0;
    private static totalHours = 0;

    private readonly hours: number;
    private readonly id: number;

    constructor(hours: number) {
        this.hours = hours;
        Share.totalHours += hours;
        Share.totalShares += 1;
        this.id = Share.totalShares;
    }

    public get dilutedShares(): number {
        return Share.totalHours / this.hours;
    }

    public get idOfShare(): number {
        return this.id;
    }
}

 */

/**
 * Represents a Share entity with attributes and methods.
 * @extends BaseEntity<Share>
 */
export class Share extends BaseEntity<Share> {

    /**
     * Initializes the Share model with the given sequelize instance and attributes.
     * @param sequelize The sequelize instance to use.
     */
    public static initModel(sequelize: Sequelize): typeof BaseEntity<Share> {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            date: {
                type: DataTypes.DATE
            },
            company: {
                type: DataTypes.INTEGER,
                references: 'Company',
                allowNull: false,
            },
            member: {
                type: DataTypes.INTEGER,
                references: 'User',
                allowNull: false,
            },
            share_value: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            hours_worked: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        }, {
            sequelize: sequelize,
            modelName: 'Share'
        });
        return Share as typeof BaseEntity<Share>;
    };
}
