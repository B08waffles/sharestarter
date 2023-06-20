import {User} from "../../../Common/Models/User";
import {BaseEntity} from "../../../Common/Models/Base/BaseEntity";
import {Company} from "../../../Common/Models/Company";
import {Share} from "../../../Common/Models/Share";

/**
 * An interface that defines the core business logic for creating and managing users, companies, and shares.
 */
export interface ICoreWorker {
    /**
     * Creates a new user with the given data and returns it.
     * @param data The user data to create
     * @returns The created user or null if failed
     */
    createUser(data: User): Promise<BaseEntity<User> | null>;

    /**
     * Creates a new company with the given data and returns it.
     * @param data The company data to create
     * @returns The created company or null if failed
     */
    createCompany(data: Company): Promise<BaseEntity<Company> | null>;

    /**
     * Creates a new share with the given data and returns it.
     * @param data The share data to create
     * @returns The created share or null if failed
     */
    createShare(data: Share): Promise<BaseEntity<Share> | null>;

    /**
     * Gets a user by its id and returns it.
     * @param id The id of the user to get
     * @returns The user or null if not found
     */
    getUser(id: number): Promise<BaseEntity<User> | null>;

    /**
     * Gets a company by its id and returns it.
     * @param id The id of the company to get
     * @returns The company or null if not found
     */
    getCompany(id: number): Promise<BaseEntity<Company> | null>;

    /**
     * Gets a share by its id and returns it.
     * @param id The id of the share to get
     * @returns The share or null if not found
     */
    getShare(id: number): Promise<BaseEntity<Share> | null>;

    /**
     * Updates a user with the given data and returns it.
     * @param data The user data to update
     * @returns The updated user or null if failed
     */
    updateUser(data: User): Promise<BaseEntity<User> | null>;

    /**
     * Updates a company with the given data and returns it.
     * @param data The company data to update
     * @returns The updated company or null if failed
     */
    updateCompany(data: Company): Promise<BaseEntity<Company> | null>;

    /**
     * Updates a share with the given data and returns it.
     * @param data The share data to update
     * @returns The updated share or null if failed
     */
    updateShare(data: Share): Promise<BaseEntity<Share> | null>;

    /**
     * Deletes a user by its id and returns nothing.
     * @param id The id of the user to delete
     * @returns Nothing
     */
    deleteUser(id: number): Promise<void>;

    /**
     * Deletes a company by its id and returns nothing.
     * @param id The id of the company to delete
     * @returns Nothing
     */
    deleteCompany(id: number): Promise<void>;

    /**
     * Deletes a share by its id and returns nothing.
     * @param id The id of the share to delete
     * @returns Nothing
     */
    deleteShare(id: number): Promise<void>;
}