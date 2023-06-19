import {BaseRepository} from "./Base/BaseRepository";
import {User} from "../../Common/Models/User";
import {DatabaseContext} from "../DatabaseContexts/DatabaseContext";
import {IBaseRepository} from "./Base/Abstractions/IBaseRespository";

/**
 * A class for repositories that handle CRUD operations for User entities.
 * @extends BaseRepository<User> The base class for repositories with User as the generic type
 * @implements IBaseRepository<User> The interface for repositories that support CRUD operations
 */
export class UserRepository extends BaseRepository<User> implements IBaseRepository<User> {
    /**
     * Creates a new repository with the given database context.
     * @param databaseContext The database context to use
     */
    public constructor(databaseContext: DatabaseContext) {
        super(databaseContext)
    }
}