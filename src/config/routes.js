import { Switch, Route } from "react-router";
import Home from "../components/Home/home";
import Index from "../components/Index/Index";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ Index } />
        </Switch>
    );
};

export default Routes;