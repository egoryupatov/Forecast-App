import {Forecast3HoursAPI, WeatherResponseAPI} from "../api-types";
import {Forecast5Days} from "../../store/forecastSlice";

export const transformAPIWeatherResponse = (weatherResponse: WeatherResponseAPI): Forecast5Days => {


    const forecast5Days = {

        list: weatherResponse.list.map((item: Forecast3HoursAPI) => {
            return {
                temp: Math.round(item.main.temp),
                pressure: (item.main.pressure),
                humidity: (item.main.humidity),
                feels_like: Math.round(item.main.feels_like),
                icon: (item.weather[0].icon),
                wind: (item.wind.speed)
            }
        }),
        city: {
            name: weatherResponse.city.name,
            country: weatherResponse.city.country
        }
    }

    return forecast5Days;

}

