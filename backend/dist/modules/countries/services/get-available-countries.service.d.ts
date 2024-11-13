import { HttpService } from "@nestjs/axios";
import { AvailableCountryType } from "../types/available-country.type";
export declare class GetAvailableCountriesService {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    handle(): Promise<AvailableCountryType[]>;
}
