import { CountryInfoType } from "../types/country-info.type";
import { GetAvailableCountriesService } from "./get-available-countries.service";
import { GetBorderCountriesService } from "./get-border-countries.service";
import { GetFlagUrlService } from "./get-flag-url.service";
import { GetPopulationDataService } from "./get-population-data.service";
export declare class GetCountryInfoService {
    private readonly getAvailableCountriesService;
    private readonly getBorderCountriesService;
    private readonly getPopulationDataService;
    private readonly flagUrlService;
    constructor(getAvailableCountriesService: GetAvailableCountriesService, getBorderCountriesService: GetBorderCountriesService, getPopulationDataService: GetPopulationDataService, flagUrlService: GetFlagUrlService);
    handle(iso2CountryName: string): Promise<CountryInfoType>;
    private findCountryByIso2;
    private getFlagAndIso3;
    private getBorderCountries;
    private getPopulationCounts;
}
