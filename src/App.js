import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import Navigation from './Navigation';
import Dashboard from './Dashboard';
import OrderHistory from './OrderHistory';

const App = () => {
  return (
    <React.StrictMode>
      <div className="main-container container">
        <div className="columns">
          <Navigation />

          <div className="column">
            <Router>
              <Dashboard path="/" />
              <OrderHistory path="/history" />
            </Router>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
