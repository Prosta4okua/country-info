import { IsString, Length, Matches } from "class-validator";

export class GetCountryInfoDto {
	@IsString()
	@Length(2)
	@Matches(/^[a-zA-Z]+$/, {
		message: "countryName can only contain English letters",
	})
	countryName: string;
}
