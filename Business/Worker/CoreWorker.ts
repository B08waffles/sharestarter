import {CompanyService} from "../../Infrastructure/Services/CompanyService";
import {UserService} from "../../Infrastructure/Services/UserServices";
import {ShareService} from "../../Infrastructure/Services/ShareService";

export class CoreWorker {
    private companyService: CompanyService;
    private userService: UserService;
    private shareService: ShareService;

    public constructor(companyService: CompanyService, userService: UserService, shareService: ShareService) {
        this.companyService = companyService;
        this.userService = userService;
        this.shareService = shareService;
    }
}