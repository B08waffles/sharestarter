import {Company} from "../../Common/Models/Company";
import {DatabaseContext} from "../DatabaseContexts/DatabaseContext";
import {BaseRepository} from "./Base/BaseRepository";
import {IBaseRepository} from "./Base/Abstractions/IBaseRespository";

/**
 * A class for repositories that handle CRUD operations for Company entities.
 * @extends BaseRepository<Company> The base class for repositories with Company as the generic type
 * @implements IBaseRepository<Company> The interface for repositories that support CRUD operations
 */
export class CompanyRepository extends BaseRepository<Company> implements IBaseRepository<Company> {
    /**
     * Creates a new repository with the given database context.
     * @param databaseContext The database context to use
     */
    public constructor(databaseContext: DatabaseContext) {
        super(databaseContext)
    }
}