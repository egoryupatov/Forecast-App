import React, {useEffect, useState} from 'react';
import {Container} from "../styles/Container.styled";
import {WrapperStyled} from "../styles/Wrapper.styled";
import {useParams} from "react-router-dom";
import {WeatherResponseAPI} from "../api/api-types";
import {getForecast} from "../store/forecastSlice";
import {transformAPIWeatherResponse} from "../api/transformers/transformAPIWeatherResponse";
import {useAppDispatch} from "../store/hooks";
import {WeatherWidget} from "./WeatherWidget/WeatherWidget";
import {PageNotFound} from "./PageNotFound/PageNotFound";

export const City = () => {

    const params = useParams();
    const dispatch = useAppDispatch();
    const key = 'AIzaSyCmw6tSWXTBZHPeOVvvYR5qmGxJBL8cY6k';
    const keyOpen = '49ccedf8551f75ed5547f6e9c7d6ad0f';

    const [isLoaded, setIsLoaded] = useState(false)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${params.city}&key=${key}`)
            .then((response) => response.json())
            .then((data) => {

                data.status == 'ZERO_RESULTS' ? setNotFound(true) :

                fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.results.map((city:any) => city.geometry.location.lat)}&lon=${data.results.map((city:any) => city.geometry.location.lng)}&appid=${keyOpen}&units=metric`)
                    .then<WeatherResponseAPI>((response) => {
                        return response.json();
                    })
                    .then((weather) => {
                        dispatch(getForecast(transformAPIWeatherResponse(weather)));
                        setIsLoaded(true)
                    })
            })
    }, [])

    return (

        <Container>
            <WrapperStyled>

                {notFound ? <PageNotFound/> : ''}
                {isLoaded ? <WeatherWidget/> : ''}

            </WrapperStyled>
        </Container>

    );
};



