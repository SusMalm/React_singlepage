import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Tarina from "./Tarinakaksi";
import * as tarinaActions from "./tarinaActionyksi";


function TarinaLista(props) {
  const { tarinat, poistaTarina } = props;
  return (
    <ol>
      {tarinat.map((tarina, index) => (
        <Tarina
          key={index}
          title={tarina}
          onRemove={() => poistaTarina(index)}
        />
      ))}
    </ol>
  );
}

export default connect(
  (store) => {
    return {
      tarinat: store.tarinoita.tarinat,
    };
  },
  (dispatch) => bindActionCreators(tarinaActions, dispatch)
)(TarinaLista);
