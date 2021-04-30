import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Senha from "../pages/Senha";

const Routes = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/" component={Home} />
    <Route path="/senha" component={Senha} />
  </Switch>
);

export default Routes;