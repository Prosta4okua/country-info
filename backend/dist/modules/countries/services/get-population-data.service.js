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
exports.GetPopulationDataService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const country_url_enum_1 = require("../enums/country-url.enum");
const external_api_exception_1 = require("../exceptions/external-api.exception");
const get_border_countries_service_1 = require("./get-border-countries.service");
let GetPopulationDataService = class GetPopulationDataService {
    constructor(httpService) {
        this.httpService = httpService;
        this.logger = new common_1.Logger(get_border_countries_service_1.GetBorderCountriesService.name);
    }
    async handle(iso3CountryName) {
        const result = (await (0, rxjs_1.lastValueFrom)(this.httpService
            .post(country_url_enum_1.ExternalUrl.POPULATION_DATA, { iso3: iso3CountryName })
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((error) => {
            this.logger.error(error.response.data);
            throw new external_api_exception_1.ExternalApiException();
        }))));
        if (!result || result.error) {
            throw new external_api_exception_1.ExternalApiException();
        }
        return result;
    }
};
exports.GetPopulationDataService = GetPopulationDataService;
exports.GetPopulationDataService = GetPopulationDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], GetPopulationDataService);
//# sourceMappingURL=get-population-data.service.js.map