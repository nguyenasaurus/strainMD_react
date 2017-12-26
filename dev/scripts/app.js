import React from 'react';
import ReactDOM from 'react-dom';
import StrainMD from './strainMD'

class App extends React.Component {
    render() {
      return (
        <div>
          <StrainMD />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
