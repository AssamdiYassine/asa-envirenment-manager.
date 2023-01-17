import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Development from "./Developement/index.js";
import Test from "./test/index";
import Performance from "./performance";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
function index(props) {
  return (
    <Switch>
      <Redirect from={`/environment`} exact to={`/environment/development`} />
      <Route path={`/environment/development/:id`} component={Development} />
      <Route path={`/environment/test/:id`} component={Test} />
      <Route path={`/environment/performance/:id`} component={Performance} />
      <Redirect to="/404" />
    </Switch>
  );
}
const mapStateToProps = (state) => {
  const { userreducer } = state;
  return {
    user: userreducer.user,
  };
};

export default withRouter(connect(mapStateToProps, {})(index));
