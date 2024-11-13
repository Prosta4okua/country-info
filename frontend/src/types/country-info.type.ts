export type CountryInfoType = {
  countryName: string;
  iso2: string;
  iso3: string;
  flag: string;
  populationCounts: {
    year: number;
    value: number;
  }[];
  borders: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
  }[];
};
