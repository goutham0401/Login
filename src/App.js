import React from 'react';
import './App.css';
import LoginForm from './Redux/LoginForm/LoginForm'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import FetchTable from './fetchData/test'
 function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginForm}></Route>
          <Route path='/FetchTable' component={FetchTable}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
