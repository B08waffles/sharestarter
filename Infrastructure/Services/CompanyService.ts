import {Company} from "../../Common/Models/Company";
import {CompanyRepository} from "../Repositories/CompanyRepository";
import {BaseService} from "./Base/BaseService";
import {IBaseService} from "./Base/Abstractions/IBaseService";

/**
 * A class for services that handle business logic for Company entities.
 * @extends BaseService<Company> The base class for services with Company as the generic type
 * @implements IBaseService<Company> The interface for services that support CRUD operations
 */
export class CompanyService extends BaseService<Company> implements IBaseService<Company> {
    /**
     * Creates a new service with the given company repository.
     * @param companyRepository The company repository to use
     */
    public constructor(companyRepository: CompanyRepository) {
        super(companyRepository);
    }
}