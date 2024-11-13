import { HttpService } from "@nestjs/axios";
import { BorderCountryType } from "../types/border-country.type";
export declare class GetBorderCountriesService {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    handle(iso2CountryName: string): Promise<BorderCountryType>;
}
