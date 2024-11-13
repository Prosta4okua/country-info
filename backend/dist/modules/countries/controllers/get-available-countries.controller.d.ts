import { GetAvailableCountriesService } from "../services/get-available-countries.service";
import { AvailableCountryType } from "../types/available-country.type";
export declare class GetAvailableCountriesController {
    private readonly getAvailableCountriesService;
    constructor(getAvailableCountriesService: GetAvailableCountriesService);
    getAvailableCountries(): Promise<AvailableCountryType[]>;
}
