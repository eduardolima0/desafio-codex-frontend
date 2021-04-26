import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Routes;