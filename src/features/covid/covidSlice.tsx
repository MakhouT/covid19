import { 
    createSlice, 
    PayloadAction, 
    createAsyncThunk 
} from '@reduxjs/toolkit';

interface CovidState {
    countries: Array<{
        "name": string;
        "iso2": string;
        "iso3": string;
    }>;
}

const initialState: CovidState = {
    countries: [],
};

const covidSlice = createSlice({
    name: 'covid',
    initialState,
    reducers: {
       fetchCountries(state) {
           state.countries = [{
            "name": 'Belgium',
            "iso2": 'BE',
            "iso3": 'be',
           }];
       }
    },
})

export const { fetchCountries } = covidSlice.actions;
export default covidSlice.reducer;