import React, {useEffect} from 'react';
import {Container} from "./styles/Container.styled";
import {WrapperStyled} from "./styles/Wrapper.styled";
import {InputFormContainer} from "./components/InputForm/InputFormContainer";

export const App = () => {

    return (
        <div className="App">
            <Container>
                <WrapperStyled>

                    <InputFormContainer/>

                </WrapperStyled>
            </Container>
        </div>
    );
}