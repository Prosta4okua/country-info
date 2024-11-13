import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CountryModule } from "./modules/countries/country.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ".env",
			isGlobal: true,
		}),
		CountryModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
