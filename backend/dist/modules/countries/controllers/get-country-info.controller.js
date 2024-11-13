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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCountryInfoController = void 0;
const common_1 = require("@nestjs/common");
const get_country_info_dto_1 = require("../dto/get-country-info.dto");
const get_country_info_service_1 = require("../services/get-country-info.service");
let GetCountryInfoController = class GetCountryInfoController {
    constructor(getCountryInfoService) {
        this.getCountryInfoService = getCountryInfoService;
    }
    async handle(getCountryInfoDto) {
        const { countryName } = getCountryInfoDto;
        return await this.getCountryInfoService.handle(countryName);
    }
};
exports.GetCountryInfoController = GetCountryInfoController;
__decorate([
    (0, common_1.Get)("/:countryName"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_country_info_dto_1.GetCountryInfoDto]),
    __metadata("design:returntype", Promise)
], GetCountryInfoController.prototype, "handle", null);
exports.GetCountryInfoController = GetCountryInfoController = __decorate([
    (0, common_1.Controller)("countries"),
    __metadata("design:paramtypes", [get_country_info_service_1.GetCountryInfoService])
], GetCountryInfoController);
//# sourceMappingURL=get-country-info.controller.js.map