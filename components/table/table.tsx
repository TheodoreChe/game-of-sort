import React from "react";
import styled from "styled-components";

type TProps = {};

export class Table extends React.Component<TProps> {
  static Board = styled.div`
    width: 420px;
    height: 460px;
    background: red;
  `;

  static Grid = styled.div`
    width: 400px;
    height: 400px;
    background: green;
  `;

  render() {
    return (
      <Table.Board>
        <Table.Grid />
      </Table.Board>
    );
  }
}
