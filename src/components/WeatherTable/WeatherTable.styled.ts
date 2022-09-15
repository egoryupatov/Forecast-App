import styled from "styled-components";

export const WeatherTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const WeatherTableHeader = styled.div`
  background: #36304a;
  color: white;
  font-weight: bold;
  font-size: 17px;
`

export const WeatherTableContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Cell = styled.div`
  display: flex;
  width: calc(100vw / 9);
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const FirstCell = styled.div`
  display: flex;
  flex: 2;
  padding: 10px;
  justify-content: start;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  min-height: 70px;

  &:nth-child(2n) {
  background-color: #F4F4F4;
}
`

