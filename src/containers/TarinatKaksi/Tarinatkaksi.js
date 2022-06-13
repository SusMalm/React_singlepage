import React, { Component } from "react";

import AddTarina from "./AddTarinakaksi";
import TarinaLista from "./TarinaListakaksi";

class Tarinat extends Component {
  render() {
    return (
      <div>
        <h2>Tarina</h2>
        <p>Tarinoita with redux</p>
        <p>Hiukan vielä kesken, tarkoitus lisätä toimintoja</p>
        <AddTarina />
        <TarinaLista />
      </div>
    );
  }
}

export default Tarinat;
