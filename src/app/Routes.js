import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" component={<Home />} />
      <Route exact path="/home" component={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
