import { NavBar } from "components/navbar/NavBar";
import React, { Component } from "react";

class LayoutEmpty extends Component {
  render() {
    const { children,routeName } = this.props;
    
    return <>
    {routeName === "home" && (
       <NavBar/>
      )}
   
    <div className="container-fluid d-flex align-items-center justify-content-center">
    
    
    {children}
    </div>
    
    
    </>;
  }
}
export default LayoutEmpty;
