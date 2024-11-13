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
exports.GetAvailableCountriesController = void 0;
const common_1 = require("@nestjs/common");
const get_available_countries_service_1 = require("../services/get-available-countries.service");
let GetAvailableCountriesController = class GetAvailableCountriesController {
    constructor(getAvailableCountriesService) {
        this.getAvailableCountriesService = getAvailableCountriesService;
    }
    async getAvailableCountries() {
        return await this.getAvailableCountriesService.handle();
    }
};
exports.GetAvailableCountriesController = GetAvailableCountriesController;
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GetAvailableCountriesController.prototype, "getAvailableCountries", null);
exports.GetAvailableCountriesController = GetAvailableCountriesController = __decorate([
    (0, common_1.Controller)("countries"),
    __metadata("design:paramtypes", [get_available_countries_service_1.GetAvailableCountriesService])
], GetAvailableCountriesController);
//# sourceMappingURL=get-available-countries.controller.js.map