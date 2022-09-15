import {City} from "../store/forecastSlice";

export interface Forecast3HoursAPI {
    main: {
        temp: number;
        pressure: number;
        humidity: number;
        feels_like: number;
    },
    weather: Weather[],
    wind: {
        speed: number;
    }
}

export interface Weather {
        icon: string;
}

export interface WeatherResponseAPI {

    list: Forecast3HoursAPI[]
    city: City;

}

