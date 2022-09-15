import styled from "styled-components";

interface WrapperProps {
    width?:string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({width}) => width || '30vw'};
`