import {CompanyService} from "../../Infrastructure/Services/CompanyService";
import {UserService} from "../../Infrastructure/Services/UserServices";
import {ShareService} from "../../Infrastructure/Services/ShareService";
import {User} from "../../Common/Models/User";
import {BaseEntity} from "../../Common/Models/Base/BaseEntity";
import {Company} from "../../Common/Models/Company";
import {Share} from "../../Common/Models/Share";
import {ICoreWorker} from "./Abstractions/ICoreWorker";

/**
 * A class that provides core business logic for creating and managing users, companies, and shares.
 */
export class CoreWorker implements ICoreWorker {
    private companyService: CompanyService;
    private userService: UserService;
    private shareService: ShareService;

    /**
     * Creates a new instance of CoreWorker with the given services.
     * @param companyService The service for managing companies
     * @param userService The service for managing users
     * @param shareService The service for managing shares
     */
    public constructor(companyService: CompanyService, userService: UserService, shareService: ShareService) {
        this.companyService = companyService;
        this.userService = userService;
        this.shareService = shareService;
    }

    /**
     * Creates a new user with the given data and returns it.
     * @param data The user data to create
     * @returns The created user or null if failed
     */
    public async createUser(data: User): Promise<BaseEntity<User> | null> {
        return await this.userService.createEntity(data);
    }

    /**
     * Creates a new company with the given data and returns it.
     * @param data The company data to create
     * @returns The created company or null if failed
     */
    public async createCompany(data: Company): Promise<BaseEntity<Company> | null> {
        return await this.companyService.createEntity(data);
    }

    /**
     * Creates a new share with the given data and returns it.
     * @param data The share data to create
     * @returns The created share or null if failed
     */
    public async createShare(data: Share): Promise<BaseEntity<Share> | null> {
        return await this.shareService.createEntity(data);
    }

    /**
     * Gets a user by its id and returns it.
     * @param id The id of the user to get
     * @returns The user or null if not found
     */
    public async getUser(id: number): Promise<BaseEntity<User> | null> {
        return await this.userService.getEntityById(id);
    }

    /**
     * Gets a company by its id and returns it.
     * @param id The id of the company to get
     * @returns The company or null if not found
     */
    public async getCompany(id: number): Promise<BaseEntity<Company> | null> {
        return await this.companyService.getEntityById(id);
    }

    /**
     * Gets a share by its id and returns it.
     * @param id The id of the share to get
     * @returns The share or null if not found
     */
    public async getShare(id: number): Promise<BaseEntity<Share> | null> {
        return await this.shareService.getEntityById(id);
    }

    /**
     * Updates a user with the given data and returns it.
     * @param data The user data to update
     * @returns The updated user or null if failed
     */
    public async updateUser(data: User): Promise<BaseEntity<User> | null> {
        return await this.userService.updateEntity(data);
    }

    /**
     * Updates a company with the given data and returns it.
     * @param data The company data to update
     * @returns The updated company or null if failed
     */
    public async updateCompany(data: Company): Promise<BaseEntity<Company> | null> {
        return await this.companyService.updateEntity(data);
    }

    /**
     * Updates a share with the given data and returns it.
     * @param data The share data to update
     * @returns The updated share or null
     */
    public async updateShare(data: Share): Promise<BaseEntity<Share> | null> {
        return await this.shareService.updateEntity(data);
    }

    /**
     * Deletes a user by its id and returns nothing.
     * @param id The id of the user to delete
     * @returns Nothing
     */
    public async deleteUser(id: number): Promise<void> {
        return await this.userService.deleteEntity(id);
    }

    /**
     * Deletes a company by its id and returns nothing.
     * @param id The id of the company to delete
     * @returns Nothing
     */
    public async deleteCompany(id: number): Promise<void> {
        return await this.companyService.deleteEntity(id);
    }

    /**
     * Deletes a share by its id and returns nothing.
     * @param id The id of the share to delete
     * @returns Nothing
     */
    public async deleteShare(id: number): Promise<void> {
        return await this.shareService.deleteEntity(id);
    }
}