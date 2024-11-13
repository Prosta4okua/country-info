import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, lastValueFrom, map } from "rxjs";
import { ExternalUrl } from "../enums/country-url.enum";
import { ExternalApiException } from "../exceptions/external-api.exception";
import { PopulationDataType } from "../types/population-data.type";
import { GetBorderCountriesService } from "./get-border-countries.service";

@Injectable()
export class GetPopulationDataService {
	private readonly logger = new Logger(GetBorderCountriesService.name);
	constructor(private readonly httpService: HttpService) {}

	async handle(iso3CountryName: string) {
		const result = (await lastValueFrom(
			this.httpService
				.post(ExternalUrl.POPULATION_DATA, { iso3: iso3CountryName })
				.pipe(
					map((response) => response.data),
					catchError((error: AxiosError) => {
						this.logger.error(error.response.data);
						throw new ExternalApiException();
					}),
				),
		)) as unknown as PopulationDataType;

		if (!result || result.error) {
			throw new ExternalApiException();
		}

		return result;
	}
}
