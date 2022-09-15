import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "../../styles/Button.styled";
import {AnotherTry, Row} from "./PageNotFoundStyled";

export const PageNotFound = () => {

    return (
                <AnotherTry>
                    <h1>We're sorry, but we didn't find your city 😢 </h1>
                    <Row>
                        <h2>Want us to automatically determine it?</h2>
                        <Link to="/"><Button>Yes</Button></Link>
                    </Row>
                </AnotherTry>

    );
};