import { HttpException, HttpStatus } from "@nestjs/common";

export class CountryNotFoundException extends HttpException {
	constructor() {
		super("Country not Found error", HttpStatus.BAD_REQUEST);
	}
}
