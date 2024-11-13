import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { GetAvailableCountriesController } from "./controllers/get-available-countries.controller";
import { GetCountryInfoController } from "./controllers/get-country-info.controller";
import { GetAvailableCountriesService } from "./services/get-available-countries.service";
import { GetBorderCountriesService } from "./services/get-border-countries.service";
import { GetCountryInfoService } from "./services/get-country-info.service";
import { GetFlagUrlService } from "./services/get-flag-url.service";
import { GetPopulationDataService } from "./services/get-population-data.service";

@Module({
	imports: [HttpModule.register({ timeout: 5000, maxRedirects: 5 })],
	providers: [
		GetAvailableCountriesService,
		GetBorderCountriesService,
		GetCountryInfoService,
		GetFlagUrlService,
		GetPopulationDataService,
	],
	controllers: [GetAvailableCountriesController, GetCountryInfoController],
})
export class CountryModule {}
