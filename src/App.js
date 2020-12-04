import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Header from "./components/Header"

function App() {
  return (
    <div className="fluid">
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>          
     
        </Switch>
        </div>
    </div>
  );
}

export default App;
