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
var GetBorderCountriesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBorderCountriesService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const country_url_enum_1 = require("../enums/country-url.enum");
const external_api_exception_1 = require("../exceptions/external-api.exception");
let GetBorderCountriesService = GetBorderCountriesService_1 = class GetBorderCountriesService {
    constructor(httpService) {
        this.httpService = httpService;
        this.logger = new common_1.Logger(GetBorderCountriesService_1.name);
    }
    async handle(iso2CountryName) {
        const result = await (0, rxjs_1.lastValueFrom)(this.httpService
            .get(country_url_enum_1.ExternalUrl.BORDERING_COUNTRIES.replace("countryName", iso2CountryName))
            .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((error) => {
            this.logger.error(error.response.data);
            throw new external_api_exception_1.ExternalApiException();
        })));
        if (!result || ("status" in result && result.status)) {
            this.logger.error(result);
            throw new external_api_exception_1.ExternalApiException();
        }
        return result;
    }
};
exports.GetBorderCountriesService = GetBorderCountriesService;
exports.GetBorderCountriesService = GetBorderCountriesService = GetBorderCountriesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], GetBorderCountriesService);
//# sourceMappingURL=get-border-countries.service.js.map