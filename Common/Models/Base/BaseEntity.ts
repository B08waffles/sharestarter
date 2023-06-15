import {IBaseEntity} from "./Abstractions/IBaseEntity";
import {DataTypes} from "sequelize";

export const BaseEntity: IBaseEntity = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
};