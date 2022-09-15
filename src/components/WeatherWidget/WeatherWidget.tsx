import React from "react";
import {useAppSelector} from "../../store/hooks";
import {
    WeatherWidgetStyled,
    WeatherWidgetStyledContent,
    WeatherWidgetStyledHeader
} from "./WeatherWidget.styled";
import {WeatherTable} from "../WeatherTable/WeatherTable";
import {Days} from "../Days/Days";
import {useParams} from "react-router-dom";

export const WeatherWidget: React.FC = () => {

    const currentWeather = useAppSelector((state) => state.forecast.forecast5Days);
    const params = useParams();

    return (

        <WeatherWidgetStyled>

            <WeatherWidgetStyledHeader>

                <h2>{currentWeather.city.name} ({currentWeather.city.country}) Weather Forecast For 5 Days</h2>

            </WeatherWidgetStyledHeader>


            <WeatherWidgetStyledContent>

                <Days/>

            </WeatherWidgetStyledContent>

            <WeatherTable/>

        </WeatherWidgetStyled>

    )
}