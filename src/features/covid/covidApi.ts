import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Countries {
    "name": string;
    "iso2": string;
    "iso3": string;
}

export interface CountryDetail {
    confirmed: {
        value: number;
        detail: string;
    },
    recovered: {
        value: number;
        detail: string;
    },
    deaths: {
        value: number;
        detail: string;
    },
    lastUpdate: string;
}

export const covidApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://covid19.mathdro.id/api',
    }),
    endpoints(builder) {
        return {
            fetchCountries: builder.query<{countries: Countries[]}, void>({
                query() {
                    return '/countries';
                }
            }),
            fetchCountryDetail: builder.query<CountryDetail, string | null | undefined>({
                query(country) {
                    return country ? `/countries/${country}` : '/';
                }
            }),
            fetchGlobal: builder.query<CountryDetail, void>({
                query() {
                    return '/';
                }
            }),
        }
    }
});

export const { 
    useFetchCountriesQuery, 
    useFetchCountryDetailQuery,
    useFetchGlobalQuery,
} = covidApi;