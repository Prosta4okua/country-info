import { HttpException, HttpStatus } from "@nestjs/common";

export class ExternalApiException extends HttpException {
	constructor() {
		super("External API error", HttpStatus.SERVICE_UNAVAILABLE);
	}
}
