import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, lastValueFrom, map } from "rxjs";
import { ExternalUrl } from "../enums/country-url.enum";
import { ExternalApiException } from "../exceptions/external-api.exception";
import { BorderCountryType } from "../types/border-country.type";

@Injectable()
export class GetBorderCountriesService {
	private readonly logger = new Logger(GetBorderCountriesService.name);
	constructor(private readonly httpService: HttpService) {}

	async handle(iso2CountryName: string): Promise<BorderCountryType> {
		const result = await lastValueFrom(
			this.httpService
				.get(
					ExternalUrl.BORDERING_COUNTRIES.replace(
						"countryName",
						iso2CountryName,
					),
				)
				.pipe(
					map((response) => response.data),
					catchError((error: AxiosError) => {
						this.logger.error(error.response.data);
						throw new ExternalApiException();
					}),
				),
		) as unknown as BorderCountryType | { status: number };

		if (!result || ("status" in result && result.status)) {
			this.logger.error(result);

			throw new ExternalApiException();
		}

		return result as BorderCountryType;
	}
}
