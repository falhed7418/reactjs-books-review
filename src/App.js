import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
