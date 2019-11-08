import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Qualifications from "./components/Qualifications/Qualifications";
import Experience from "./components/Experience/Experience";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import MainCover from "./components/MainCover/MainCover";
// import Login from "./components/Login/login";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/qualifications" component={Qualifications} />
        <Route path="/experience" component={Experience} />
        <Route path="/info" component={ContactInfo} />
        <Route path="/profile" component={Profile} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/" component={MainCover} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
