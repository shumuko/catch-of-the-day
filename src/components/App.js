import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // Always update state
    // 1. take a copy of the existing state
    const fishes = {...this.state.fishes} // `...` object spread. take a copy of existing state
    // 2. add new fish to that fishes variable, 
    //    give unique keys
    fishes[`fish${Date.now()}`] = fish
    // Set the new fishes object to state
    this.setState({ fishes: fishes});
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />  
        <Inventory 
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;