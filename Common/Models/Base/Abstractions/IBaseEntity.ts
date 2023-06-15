import {IntegerDataTypeConstructor} from "sequelize";

export interface IBaseEntity {
    id: {autoIncrement: boolean, primaryKey: boolean, type: IntegerDataTypeConstructor};
}