import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import pkg from '../../package.json';
import Footer from './Footer';

const DEV = process && process.env && process.env.NODE_ENV === 'development';

const App = () => (
  <Router basename={`/${DEV ? '' : pkg.name}`}>
    <div className="page">
      <main className="page__wrapper">
        <div className=" container page__main">
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
