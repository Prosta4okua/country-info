import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosError } from "axios";
import { lastValueFrom } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ExternalUrl } from "../enums/country-url.enum";
import { ExternalApiException } from "../exceptions/external-api.exception";
import { AvailableCountryType } from "../types/available-country.type";

@Injectable()
export class GetAvailableCountriesService {
	private readonly logger = new Logger(GetAvailableCountriesService.name);
	constructor(private readonly httpService: HttpService) {}

	async handle(): Promise<AvailableCountryType[]> {
		return await lastValueFrom(
			this.httpService.get(ExternalUrl.ALL_AVAILABLE_COUNTRIES).pipe(
				map((response) => response.data),
				catchError((error: AxiosError) => {
					this.logger.error(
						`error: ${error.message}, status: ${error.response?.status}`,
					);
					throw new ExternalApiException();
				}),
			),
		);
	}
}
