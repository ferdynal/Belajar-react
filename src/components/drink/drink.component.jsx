import React, { Fragment } from "react";

const DrinkMenu = props => {
  return (
    <Fragment>
      <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
        <p>Name: {props.nameMenu}</p>
        <p>Price: IDR {props.priceMenu}</p>
      </div>
    </Fragment>
  );
};

export default DrinkMenu;
