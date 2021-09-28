import { Switch, Route } from "react-router";
import Home from "../components/Home/home";
import About from "../components/About/about";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
        </Switch>
    );
};

export default Routes;