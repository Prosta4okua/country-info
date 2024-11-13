import { HttpService } from "@nestjs/axios";
import { PopulationDataType } from "../types/population-data.type";
export declare class GetPopulationDataService {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    handle(iso3CountryName: string): Promise<PopulationDataType>;
}
