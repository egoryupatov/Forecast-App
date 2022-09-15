import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

export interface Forecast3Hours {
    temp: number
    pressure: number
    humidity: number
    feels_like: number
    icon: string
    wind:number
}

export interface City {
    name: string;
    country: string;
}

export interface Forecast5Days {
    list: Forecast3Hours[];
    city: City;
}

export interface Forecast {
    forecast5Days: Forecast5Days;
    chosenDay: number;
}

const initialState: Forecast = {
    forecast5Days: {
        list: [],
        city: {
            name: '',
            country: ''
        }
    },
    chosenDay: 0
}

export const forecastSlice = createSlice({
    name: "forecast",
    initialState,
    reducers: {
        getForecast: (state, action: PayloadAction<Forecast5Days>) => {
            state.forecast5Days = action.payload
        },
        setChosenDay: (state, action ) => {
            state.chosenDay = action.payload
        }
    }
})

export const {getForecast, setChosenDay} = forecastSlice.actions;

export const selectForecast = (state: RootState) => state.forecast.forecast5Days;

export const selectGroupedForecast = createSelector(selectForecast, (forecast5Days) => {

    const array:Forecast3Hours[][] = [];

    forecast5Days.list.forEach((element, index) => {

        const i = (index)%8;
        const arrLength = array.length;

        if (i == 0 || arrLength == 0) {
            array.push([element])
        } else {
            array[arrLength - 1].push(element)
        }

    })

    return array;

})


export default forecastSlice.reducer