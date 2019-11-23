import React, { Component } from "react";
import "./App.css";

import Counter from "./components/Counter";
import ShowName from "./components/ShowName";

// Componentes de clase
class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.changeCounter = this.changeCounter.bind(this);
  }

  changeCounter(number) {
    let { counter } = this.state;
    this.setState({
      counter: (counter += number)
    });
  }

  render() {
    return (
      <div>
        <Counter
          counter={this.state.counter}
          changeCounter={this.changeCounter}
        />
        <ShowName />
      </div>
    );
  }
}

//Funciones de flecha
/*const click = () => {
  console.log('Click');
}*/

export default App;
