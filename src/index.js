import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

// *******************************************************************
// Functional Component Example Counter
// const Contador = () => {
//   let [contador, setContador] = useState(51);

//   return (
//     <div>
//       <span>{contador}</span>
//       <button
//         onClick={() => {
//           setContador(contador + 1);
//         }}
//       >
//         Incrementar
//       </button>
//       <button
//         onClick={() => {
//           setContador(contador - 1);
//         }}
//       >
//         Decrementar
//       </button>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Contador />
//     </div>
//   );
// };
// *******************************************************************

// ******************************** Example with class component *******************************
// Class Component Example
class App extends React.Component {
  // Babel transform this in a constructor function itself.
  state = { lat: null, errorMessage: '' };

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message }),
    )
  }

  componentDidUpdate () {
    console.log("Component Updated!!");
  }

  // Render method
  render () {
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
