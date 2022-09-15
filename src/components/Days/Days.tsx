import React, {useState} from "react";
import {setChosenDay} from "../../store/forecastSlice";
import {useAppDispatch} from "../../store/hooks";
import {DaysWrapper, DayNames, Dates} from "./Days.styled";

export const Days: React.FC = () => {

    let date = new Date();
    let dayNumber = date.getDate();

    const dates = [];
    const dayNames = [];

    for (let i = 0; i < 5; i++) {
        let a = dayNumber + i
        dates.push(a)
    }

    for (let i = 0; i < 5; i++) {
        date.setDate(dayNumber + i)
        let a = date.toString()
        let b = a.slice(0, 3);
        dayNames.push(b)
    }

    const [day, setDay] = useState(0);

    const dispatch = useAppDispatch()

    const handleDayChoice = (index: number) => {
        return (event: React.MouseEvent) => {
            setDay(index)
            dispatch(setChosenDay(day))
        }
    }

    return (

        <DaysWrapper>
            <DayNames>
                {dayNames.map((day) => <div>{day}</div>)}
            </DayNames>
            <Dates>
                {dates.map((date, index) => <div key={index}>
                    <button onClick={handleDayChoice(index)} key={index}>{date}</button>
                </div>)}
            </Dates>
        </DaysWrapper>

    )

}