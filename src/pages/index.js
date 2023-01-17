//Dependencies
import React from "react";
import { Redirect, Switch } from "react-router-dom";
 import { Router } from './router';
import Home from "./home";
import Environment from "./environment/index";
import ErrorPage from "./ErrorPage";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
// Layouts
 import LayoutEmpty from "layouts/LayoutEmpty";
  
// Router

const Routes = (props ) => {
 

 
 
  return (
    <Switch>
    <Redirect from="/" exact={true} to="/home" />

       {/* Auth Pages */}
      <Router path="/home" routeName="home"  component={Home}  layout={LayoutEmpty}   />
      <Router path="/environment"   component={Environment} layout={LayoutEmpty} />

      <Router path="/404" exact component={ErrorPage} layout={LayoutEmpty} />
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

export default withRouter(
   connect(mapStateToProps, {  })(Routes)
);
 