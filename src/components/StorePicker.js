import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(event) {
    event.preventDefault()
    console.log(this);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <button onClick={this.handleClick}>Click me!</button>
        <input 
          type="text"
          ref={this.myInput}
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()}
         />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

export default StorePicker;
