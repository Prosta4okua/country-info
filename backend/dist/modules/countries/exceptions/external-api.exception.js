"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalApiException = void 0;
const common_1 = require("@nestjs/common");
class ExternalApiException extends common_1.HttpException {
    constructor() {
        super("External API error", common_1.HttpStatus.SERVICE_UNAVAILABLE);
    }
}
exports.ExternalApiException = ExternalApiException;
//# sourceMappingURL=external-api.exception.js.map