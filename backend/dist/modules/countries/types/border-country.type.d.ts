export type BorderCountryType = {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: BorderCountryType[] | null;
};
