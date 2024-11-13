"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const get_available_countries_controller_1 = require("./controllers/get-available-countries.controller");
const get_country_info_controller_1 = require("./controllers/get-country-info.controller");
const get_available_countries_service_1 = require("./services/get-available-countries.service");
const get_border_countries_service_1 = require("./services/get-border-countries.service");
const get_country_info_service_1 = require("./services/get-country-info.service");
const get_flag_url_service_1 = require("./services/get-flag-url.service");
const get_population_data_service_1 = require("./services/get-population-data.service");
let CountryModule = class CountryModule {
};
exports.CountryModule = CountryModule;
exports.CountryModule = CountryModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule.register({ timeout: 5000, maxRedirects: 5 })],
        providers: [
            get_available_countries_service_1.GetAvailableCountriesService,
            get_border_countries_service_1.GetBorderCountriesService,
            get_country_info_service_1.GetCountryInfoService,
            get_flag_url_service_1.GetFlagUrlService,
            get_population_data_service_1.GetPopulationDataService,
        ],
        controllers: [get_available_countries_controller_1.GetAvailableCountriesController, get_country_info_controller_1.GetCountryInfoController],
    })
], CountryModule);
//# sourceMappingURL=country.module.js.map