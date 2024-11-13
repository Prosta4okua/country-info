"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCountryInfoService = void 0;
const common_1 = require("@nestjs/common");
const country_not_found_exception_1 = require("../exceptions/country-not-found.exception");
const get_available_countries_service_1 = require("./get-available-countries.service");
const get_border_countries_service_1 = require("./get-border-countries.service");
const get_flag_url_service_1 = require("./get-flag-url.service");
const get_population_data_service_1 = require("./get-population-data.service");
let GetCountryInfoService = class GetCountryInfoService {
    constructor(getAvailableCountriesService, getBorderCountriesService, getPopulationDataService, flagUrlService) {
        this.getAvailableCountriesService = getAvailableCountriesService;
        this.getBorderCountriesService = getBorderCountriesService;
        this.getPopulationDataService = getPopulationDataService;
        this.flagUrlService = flagUrlService;
    }
    async handle(iso2CountryName) {
        const searchResult = await this.findCountryByIso2(iso2CountryName);
        if (!searchResult) {
            throw new country_not_found_exception_1.CountryNotFoundException();
        }
        const { countryCode, name: countryName } = searchResult;
        const { flag, iso3 } = await this.getFlagAndIso3(countryCode);
        const borderCountries = await this.getBorderCountries(iso2CountryName);
        const populationCounts = await this.getPopulationCounts(iso3);
        return {
            countryName,
            borders: borderCountries,
            iso2: countryCode,
            iso3,
            flag,
            populationCounts,
        };
    }
    async findCountryByIso2(iso2CountryName) {
        const allCountries = await this.getAvailableCountriesService.handle();
        return allCountries.find((country) => country.countryCode.toLocaleLowerCase() ===
            iso2CountryName.toLocaleLowerCase());
    }
    async getFlagAndIso3(iso2CountryName) {
        const rawFlagUrl = await this.flagUrlService.handle(iso2CountryName);
        return rawFlagUrl.data;
    }
    async getBorderCountries(iso2CountryName) {
        const rawBorderCountries = await this.getBorderCountriesService.handle(iso2CountryName);
        return rawBorderCountries.borders.map(({ borders, ...otherProperties }) => otherProperties);
    }
    async getPopulationCounts(iso3) {
        const rawPopulationData = await this.getPopulationDataService.handle(iso3);
        return rawPopulationData.data.populationCounts;
    }
};
exports.GetCountryInfoService = GetCountryInfoService;
exports.GetCountryInfoService = GetCountryInfoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [get_available_countries_service_1.GetAvailableCountriesService,
        get_border_countries_service_1.GetBorderCountriesService,
        get_population_data_service_1.GetPopulationDataService,
        get_flag_url_service_1.GetFlagUrlService])
], GetCountryInfoService);
//# sourceMappingURL=get-country-info.service.js.map