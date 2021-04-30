import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Senha from "../pages/Senha";
import Notes from "../pages/Notes"

const Routes = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/" component={Home} />
    <Route path="/senha" component={Senha} />
    <Route path="/task" component={Notes}/> 
  </Switch>
);

export default Routes;