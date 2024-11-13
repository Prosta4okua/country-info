import { Controller, Get, Param } from "@nestjs/common";
import { GetCountryInfoDto } from "../dto/get-country-info.dto";
import { GetCountryInfoService } from "../services/get-country-info.service";
import { CountryInfoType } from "../types/country-info.type";

@Controller("countries")
export class GetCountryInfoController {
	constructor(private readonly getCountryInfoService: GetCountryInfoService) {}

	@Get("/:countryName")
	async handle(
		@Param() getCountryInfoDto: GetCountryInfoDto,
	): Promise<CountryInfoType> {
		const { countryName } = getCountryInfoDto;

		return await this.getCountryInfoService.handle(countryName);
	}
}
