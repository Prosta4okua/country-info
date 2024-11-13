import { HttpService } from "@nestjs/axios";
import { FlagUrlType } from "../types/flag-url.type";
export declare class GetFlagUrlService {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    handle(iso2CountryName: string): Promise<FlagUrlType>;
}
