import {IntegerDataTypeConstructor, StringDataTypeConstructor} from "sequelize";
import {IBaseEntity} from "../Base/Abstractions/IBaseEntity";

export interface IUserAttributes extends IBaseEntity {
    firstName: { allowNull: boolean; type: StringDataTypeConstructor };
    lastName: { allowNull: boolean; type: StringDataTypeConstructor };
    email: { allowNull: boolean; type: StringDataTypeConstructor };
    password: {allowNull: boolean; type: StringDataTypeConstructor }
    sessionCookie: {type: StringDataTypeConstructor}
}