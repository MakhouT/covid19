import { configureStore } from "@reduxjs/toolkit";
import covidReducer from '../features/covid/covidSlice';
import { covidApi } from '../features/covid/covidApi';

export const store = configureStore({
    reducer: {
        covid: covidReducer,
        [covidApi.reducerPath]: covidApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(covidApi.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export  type RootState = ReturnType<typeof store.getState>;