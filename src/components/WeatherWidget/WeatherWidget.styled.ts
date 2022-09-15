import styled from "styled-components";

export const WeatherWidgetStyled = styled.div`
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
  color: black;
  border-radius: 10px;
  background-color: white;
  display:flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  
  
  p {
    padding: 5px;
  }
`

export const WeatherWidgetStyledHeader = styled.div`
  display:flex;
  justify-content: center;
  color: white;
  background-color: #36304a;
  border-radius: 10px 10px 0px 0px;
`

export const WeatherWidgetStyledContent = styled.div`
  width: 100%;
  color: black;
  background-color: #F2F2F2;
  border-radius: 10px 10px 10px 10px;
  
  
  button {
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
  }
  button:focus {
    background-color: #FA8072;
    color: white;
  }
  table {
    border-collapse: collapse;
    background: #fff;
    width: 100%;
    overflow: hidden;
    font-size: 16px;
    table-layout: auto;
    th {
      padding: 1% 5% 1% 5%;
    }
    td {
      padding: 1% 5% 2% 7.5%;
    }
  }
  ul li {
    display: inline-block;
    padding: 10px;
  }
`