import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import components from '../.';
import './style.css';

const App = () => {
  return (
    <div id="container">
      {components.map(componentObject => (
        <div key={componentObject.id}>
          <b>{componentObject.id}</b>
          <div>
            <componentObject.component />
          </div>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
