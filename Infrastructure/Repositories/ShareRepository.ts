import {Share} from "../../Common/Models/Share";
import {BaseRepository} from "./Base/BaseRepository";
import {IBaseRepository} from "./Base/Abstractions/IBaseRespository";
import {DatabaseContext} from "../DatabaseContexts/DatabaseContext";
import {BaseEntity} from "../../Common/Models/Base/BaseEntity";

/**
 * A class for repositories that handle CRUD operations for Share entities.
 * @extends BaseRepository<Share> The base class for repositories with Share as the generic type
 * @implements IBaseRepository<Share> The interface for repositories that support CRUD operations
 */
export class ShareRepository extends BaseRepository<Share> implements IBaseRepository<Share> {
    protected model: typeof Share;

    /**
     * Creates a new repository with the given database context.
     * @param databaseContext The database context to use
     */
    public constructor(databaseContext: DatabaseContext) {
        super(databaseContext)
        this.model = Share.initModel(databaseContext.getSequelize());

    }

    /**
     * Gets all shares with the same company id.
     * @param companyId The id of the company associated with the shares.
     * @returns All shares associated with a particular company.
     */
    public async getTotalsByCompanyId(companyId: number): Promise<Share[] | null> {
        return await this.model.findAll({where: {companyId: companyId}});
    }

    /**
     * Gets all shares with the same user id.
     * @param userId The id of the user associated with the shares.
     * @returns All shares associated with a particular user.
     */
    public async getTotalsByUserId(userId: number): Promise<Share[] | null> {
        return await this.model.findAll({where: {memberId: userId}});
    }

    /**
     * Gets all shares of a user in a company.
     * @param userId The id of the user associated with the shares.
     * @param companyId The id of the company associated with the shares.
     * @returns All shares associated with a particular user in a particular company.
     */
    public async getTotalsByUserAndCompanyId(userId: number, companyId: number): Promise<Share[] | null> {
        return await this.model.findAll({where: {memberId: userId, companyId: companyId}})
    }
}