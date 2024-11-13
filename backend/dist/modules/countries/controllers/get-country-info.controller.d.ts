import { GetCountryInfoDto } from "../dto/get-country-info.dto";
import { GetCountryInfoService } from "../services/get-country-info.service";
import { CountryInfoType } from "../types/country-info.type";
export declare class GetCountryInfoController {
    private readonly getCountryInfoService;
    constructor(getCountryInfoService: GetCountryInfoService);
    handle(getCountryInfoDto: GetCountryInfoDto): Promise<CountryInfoType>;
}
