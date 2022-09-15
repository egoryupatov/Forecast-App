import styled from "styled-components";

export const DaysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
  }
`

export const DayNames = styled.div`
  padding: 10px 5px 5px 5px;
  div {
    width: calc(100% / 5);
  }
`

export const Dates = styled.div`
  padding: 5px 5px 10px 5px;

  div {
    width: calc(100% / 5);
  }
  button {
    font-weight: bold;
  }
`