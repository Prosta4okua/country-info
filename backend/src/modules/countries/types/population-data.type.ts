export type PopulationDataType = {
	error: boolean;
	msg: string;
	data: {
		country: string;
		code: string;
		iso3: string;
		populationCounts: [
			{
				year: number;
				value: number;
			},
		];
	};
};
