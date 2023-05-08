import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../store/hooks";
import {WeatherResponseAPI} from "../../api/api-types";
import {getForecast} from "../../store/forecastSlice";
import {transformAPIWeatherResponse} from "../../api/transformers/transformAPIWeatherResponse";
import {InputForm} from "./InputForm";

export const InputFormContainer = () => {

    const dispatch = useAppDispatch();

    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()

        const keyGoogle = '!'
        const keyOpen = '!';

        fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${keyGoogle}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.location.lat}&lon=${data.location.lng}&appid=${keyOpen}&units=metric`)
                    .then<WeatherResponseAPI>((response) => {
                        return response.json();
                    })
                    .then((weather) => {
                        dispatch(getForecast(transformAPIWeatherResponse(weather)));
                        setDataIsLoaded(true);
                    })
            })
    };

    return (

        <InputForm

            onSubmit={handleSubmit}
            dataIsLoaded={dataIsLoaded}

        />

    );
};
