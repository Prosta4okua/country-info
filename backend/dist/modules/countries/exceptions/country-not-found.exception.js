"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class CountryNotFoundException extends common_1.HttpException {
    constructor() {
        super("Country not Found error", common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.CountryNotFoundException = CountryNotFoundException;
//# sourceMappingURL=country-not-found.exception.js.map