import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom' 
import RandomNamesList from './hoc/hoc';
import CounterWithMessage from './renderProp/renderProp';
import HooksMenu from './hooksMenu';
import './App.css';

const App = () => {
  return (
    <Router>
    <ul className="App">
      <li>
          <Link to='/HOC'>HOC</Link>
      </li>
      <li>
          <Link to='/RenderProp'>RenderProp</Link>
      </li>
      <li>
          <Link to='/Hooks'>Hooks</Link>
      </li>
    </ul>
    <Switch>
      <Route path='/HOC' component={RandomNamesList}/>
      <Route path='/RenderProp' component={CounterWithMessage}/>
      <Route path='/Hooks' component={HooksMenu}/>
    </Switch>
    </Router>
  );
}



export default App;
