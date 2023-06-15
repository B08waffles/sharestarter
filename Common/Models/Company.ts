import {
    DataTypes,
    Model,
} from "sequelize";
import {ICompanyAttributes} from "./Abstractions/ICompanyAttributes";

export class Company extends Model {}

export const companyAttributes: ICompanyAttributes = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalShares: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    totalValue: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    valuePerShare: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    totalHours: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
};