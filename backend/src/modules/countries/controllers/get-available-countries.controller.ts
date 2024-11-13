import { Controller, Get } from "@nestjs/common";
import { GetAvailableCountriesService } from "../services/get-available-countries.service";
import { AvailableCountryType } from "../types/available-country.type";

@Controller("countries")
export class GetAvailableCountriesController {
	constructor(
		private readonly getAvailableCountriesService: GetAvailableCountriesService,
	) {}

	@Get("/")
	async getAvailableCountries(): Promise<AvailableCountryType[]> {
		return await this.getAvailableCountriesService.handle();
	}
}
