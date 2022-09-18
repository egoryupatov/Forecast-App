import React, {useEffect} from 'react';
import {ContainerStyled} from "./styles/Container.styled";
import {WrapperStyled} from "./styles/Wrapper.styled";
import {InputFormContainer} from "./components/InputForm/InputFormContainer";

export const App = () => {

    return (
        <div className="App">
            <ContainerStyled>
                <WrapperStyled>

                    <InputFormContainer/>

                </WrapperStyled>
            </ContainerStyled>
        </div>
    );
}