import React, {MouseEventHandler} from "react";
import {Form} from "../../styles/Form.styled";
import {Button} from "../../styles/Button.styled";
import {WeatherWidget} from "../WeatherWidget/WeatherWidget";
import {InputFormWrapper} from "./InputForm.styled";

interface Coordinates {
    latitude: string,
    longitude: string
}

interface InputFormProps {

    onSubmit: MouseEventHandler<HTMLButtonElement>
    dataIsLoaded: boolean;

}

export const InputForm: React.FC<InputFormProps> = (props) => {

    return (

        <InputFormWrapper>

            {!props.dataIsLoaded ?
                <Button onClick={props.onSubmit}>
                   Get a forecast
                </Button>
            : ''}

            {props.dataIsLoaded ? <WeatherWidget/> : ''}

        </InputFormWrapper>
    )
}