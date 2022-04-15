import { CountryDetail } from '../features/covid/covidApi';


export const buildDisplayObject = (obj: CountryDetail | undefined) => ({
    cases: [
        {
        value: obj?.confirmed.value || 0,
        title: 'confirmed',
        },
        {
        value: obj?.deaths.value || 0,
        title: 'deaths',
        },
        {
        value: obj?.recovered.value || 0,
        title: 'recovered',
        },
    ],
    lastUpdate: obj?.lastUpdate || '',
})