import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  background: #fff;
  width: 100%;
  overflow: hidden;
  font-size:16px;
  table-layout: auto;
  
  td, th {

    text-align: left;
    padding: 5px;
  }

  thead {

    background: #36304a;

    tr {
      height: 70px;
      color:white;

    }

  }

  tbody {

    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;

    tr {
      height: 40px;
      font-size: 15px;
      color: gray;
      line-height: 1.2;
      font-weight: unset;
    }


    tr:nth-child(even) {
      background: #e9e9e9;
    }


    td:first-child {
      padding-left: 30px;
    }

  }
`