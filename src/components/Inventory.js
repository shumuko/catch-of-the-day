import React from "react";
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <div className="Inventory">Inventory</div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
      </div>

    );
  }
}

export default Inventory;