import { Injectable } from "@nestjs/common";
import { CountryNotFoundException } from "../exceptions/country-not-found.exception";
import { CountryInfoType } from "../types/country-info.type";
import { GetAvailableCountriesService } from "./get-available-countries.service";
import { GetBorderCountriesService } from "./get-border-countries.service";
import { GetFlagUrlService } from "./get-flag-url.service";
import { GetPopulationDataService } from "./get-population-data.service";

@Injectable()
export class GetCountryInfoService {
	constructor(
		private readonly getAvailableCountriesService: GetAvailableCountriesService,
		private readonly getBorderCountriesService: GetBorderCountriesService,
		private readonly getPopulationDataService: GetPopulationDataService,
		private readonly flagUrlService: GetFlagUrlService,
	) {}

	async handle(iso2CountryName: string): Promise<CountryInfoType> {
		const searchResult = await this.findCountryByIso2(iso2CountryName);

		if (!searchResult) {
			throw new CountryNotFoundException();
		}

		const { countryCode, name: countryName } = searchResult;

		const { flag, iso3 } = await this.getFlagAndIso3(countryCode);
		const borderCountries = await this.getBorderCountries(iso2CountryName);
		const populationCounts = await this.getPopulationCounts(iso3);

		return {
			countryName,
			borders: borderCountries,
			iso2: countryCode,
			iso3,
			flag,
			populationCounts,
		};
	}

	private async findCountryByIso2(iso2CountryName: string) {
		const allCountries = await this.getAvailableCountriesService.handle();

		return allCountries.find(
			(country) =>
				country.countryCode.toLocaleLowerCase() ===
				iso2CountryName.toLocaleLowerCase(),
		);
	}

	private async getFlagAndIso3(iso2CountryName: string) {
		const rawFlagUrl = await this.flagUrlService.handle(iso2CountryName);

		return rawFlagUrl.data;
	}

	private async getBorderCountries(iso2CountryName: string) {
		const rawBorderCountries =
			await this.getBorderCountriesService.handle(iso2CountryName);

		return rawBorderCountries.borders.map(
			({ borders, ...otherProperties }) => otherProperties,
		);
	}

	private async getPopulationCounts(iso3: string) {
		const rawPopulationData = await this.getPopulationDataService.handle(iso3);

		return rawPopulationData.data.populationCounts;
	}
}
