import React, { Component, Fragment } from "react";
import FoodMenu from "./components/food/food.component";
import DrinkMenu from "./components/drink/drink.component";

import "./App.css";

class App extends Component {
  state = {
    restoName: "Urang Awak"
  };

  render() {
    return (
      <Fragment>
        <div className="App">
          <h1 className="main-title">Cafe and Resto {this.state.restoName}</h1>
          <h2>Food</h2>
          <FoodMenu nameMenu={"Steak"} priceMenu={50000} />
          <FoodMenu nameMenu={"Gado-gado"} priceMenu={12000} />
          <h2>Drink</h2>
          <DrinkMenu nameMenu={"Ice Lemon Tea"} priceMenu={10000} />
          <DrinkMenu nameMenu={"Ice Cream Sunday"} priceMenu={18000} />
        </div>
      </Fragment>
    );
  }
}

export default App;
