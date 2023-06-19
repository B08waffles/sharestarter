import {BaseService} from "./Base/BaseService";
import {Share} from "../../Common/Models/Share";
import {IBaseService} from "./Base/Abstractions/IBaseService";
import {ShareRepository} from "../Repositories/ShareRepository";

/**
 * A class for services that handle business logic for Share entities.
 * @extends BaseService<Share> The base class for services with Share as the generic type
 * @implements IBaseService<Share> The interface for services that support CRUD operations
 */
export class ShareService extends BaseService<Share> implements IBaseService<Share> {
    private shareRepository: ShareRepository;

    /**
     * Creates a new service with the given share repository.
     * @param shareRepository The share repository to use
     */
    public constructor(shareRepository: ShareRepository) {
        super(shareRepository);
        this.shareRepository = shareRepository;
    }

    /**
     * Gets all shares with the same company id.
     * @param companyId The id of the company associated with the shares.
     * @returns All shares associated with a particular company.
     */
    public async getTotalsByCompanyId(companyId: number): Promise<Share[] | null> {
        return await this.shareRepository.getTotalsByCompanyId(companyId);
    }

    /**
     * Gets all shares with the same user id.
     * @param userId The id of the user associated with the shares.
     * @returns All shares associated with a particular user.
     */
    public async getTotalsByUserId(userId: number): Promise<Share[] | null> {
        return await this.shareRepository.getTotalsByUserId(userId);
    }

    /**
     * Gets all shares of a user in a company.
     * @param userId The id of the user associated with the shares.
     * @param companyId The id of the company associated with the shares.
     * @returns All shares associated with a particular user in a particular company.
     */
    public async getTotalsByUserAndCompanyId(userId: number, companyId: number): Promise<Share[] | null> {
        return await this.shareRepository.getTotalsByUserAndCompanyId(userId, companyId)
    }
}