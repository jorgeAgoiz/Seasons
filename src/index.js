import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

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

  renderContent () {
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    return <Spinner message='Please accept location request...' />;
  }

  // Render method
  render () {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
