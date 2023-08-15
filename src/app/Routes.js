import { BrowserRouter as Router, Route,Switch  } from "react-router-dom";
import Home from "../components/Home";
import AllDataView from "../components/AllDataView";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={<Home />} />
      <Route exact path="/allData" component={<AllDataView />} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
