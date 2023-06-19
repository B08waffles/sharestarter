import {UserRepository} from "../Repositories/UserRepository";
import {User} from "../../Common/Models/User";
import {IBaseService} from "./Base/Abstractions/IBaseService";
import {BaseService} from "./Base/BaseService";

/**
 * A class for services that handle business logic for User entities.
 * @extends BaseService<User> The base class for services with User as the generic type
 * @implements IBaseService<User> The interface for services that support CRUD operations
 */
export class UserService extends BaseService<User> implements IBaseService<User> {
    /**
     * Creates a new service with the given user repository.
     * @param userRepository The user repository to use
     */
    public constructor(userRepository: UserRepository) {
        super(userRepository);
    }
}