import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Notes from "../pages/Notes"

const Routes = () => (
  <Switch>
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/register" component={Signup} />
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/tasks" exact component={Notes}/> 
  </Switch>
);

export default Routes;