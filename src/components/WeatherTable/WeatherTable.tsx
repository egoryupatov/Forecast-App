import React from "react";
import {useAppSelector} from "../../store/hooks";
import {selectGroupedForecast} from "../../store/forecastSlice";
import {
    WeatherTableContent,
    Cell,
    Row,
    FirstCell,
    WeatherTableHeader,
    WeatherTableWrapper
} from "./WeatherTable.styled";

export const WeatherTable: React.FC = () => {

    const dayNumber = useAppSelector((state) => state.forecast.chosenDay);
    const groupedForecast = useAppSelector(selectGroupedForecast)
    const interval = ['0-3', '3-6', '6-9', '9-12', '12-15', '15-18', '18-21', '21-24']

    return (
        <WeatherTableWrapper>
            <WeatherTableHeader>
                <Row>
                    <FirstCell></FirstCell>
                    {interval.map((int) => int.length <= 4 ? <Cell>{int} am</Cell> : <Cell>{int} pm</Cell>)}
                </Row>
            </WeatherTableHeader>
            <WeatherTableContent>

                <Row>
                    <FirstCell>Weather:</FirstCell>
                    {groupedForecast[dayNumber].map(({icon}) => <Cell><img
                        src={`http://openweathermap.org/img/wn/${icon}.png`}/></Cell>)}
                </Row>

                <Row>
                    <FirstCell>Temperature:</FirstCell>
                    {groupedForecast[dayNumber].map(({temp}) => temp > 0 ? <Cell>+ {temp}°</Cell> : <Cell>- {temp}°</Cell>)}
                </Row>
                <Row>
                    <FirstCell>Feels like:</FirstCell>
                    {groupedForecast[dayNumber].map(({feels_like}) => feels_like > 0 ? <Cell>+ {feels_like}°</Cell> : <Cell>- {feels_like}°</Cell>)}
                </Row>
                <Row>
                    <FirstCell>Humidity:</FirstCell>
                    {groupedForecast[dayNumber].map(({humidity}) => <Cell>{humidity}%</Cell>)}
                </Row>
                <Row>
                    <FirstCell>Pressure (hPa):</FirstCell>
                    {groupedForecast[dayNumber].map(({pressure}) => <Cell>{pressure}</Cell>)}
                </Row>
                <Row>
                    <FirstCell>Wind (m/s):</FirstCell>
                    {groupedForecast[dayNumber].map(({wind}) => <Cell>{wind}</Cell>)}
                </Row>

            </WeatherTableContent>

        </WeatherTableWrapper>
    )
}