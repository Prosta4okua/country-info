import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, lastValueFrom, map } from "rxjs";
import { ExternalUrl } from "../enums/country-url.enum";
import { ExternalApiException } from "../exceptions/external-api.exception";
import { FlagUrlType } from "../types/flag-url.type";

@Injectable()
export class GetFlagUrlService {
	private readonly logger = new Logger(GetFlagUrlService.name);
	constructor(private readonly httpService: HttpService) {}

	async handle(iso2CountryName: string) {
		const result = (await lastValueFrom(
			this.httpService.post(ExternalUrl.FLAGS, { iso2: iso2CountryName }).pipe(
				map((response) => response.data),
				catchError((error: AxiosError) => {
					this.logger.error(error.response.data);
					throw new ExternalApiException();
				}),
			),
		)) as unknown as FlagUrlType;

		if (!result || result.error) {
			this.logger.error(result);
			throw new ExternalApiException();
		}

		return result;
	}
}
