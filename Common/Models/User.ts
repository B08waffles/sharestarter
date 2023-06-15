import {DataTypes, Model} from "sequelize";
import {IUserAttributes} from "./Abstractions/IUserAttributes";

export class User extends Model {}

export const userAttributes: IUserAttributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sessionCookie: {
        type: DataTypes.STRING
    }
};