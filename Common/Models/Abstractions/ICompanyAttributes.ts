import {FloatDataTypeConstructor, IntegerDataTypeConstructor, StringDataTypeConstructor} from "sequelize";
import {IBaseEntity} from "../Base/Abstractions/IBaseEntity";

export interface ICompanyAttributes extends IBaseEntity {
    totalValue: { allowNull: boolean; type: FloatDataTypeConstructor };
    totalHours: { allowNull: boolean; type: FloatDataTypeConstructor };
    companyName: { allowNull: boolean; type: StringDataTypeConstructor };
    valuePerShare: { allowNull: boolean; type: FloatDataTypeConstructor };
    totalShares: { allowNull: boolean; type: FloatDataTypeConstructor }
}