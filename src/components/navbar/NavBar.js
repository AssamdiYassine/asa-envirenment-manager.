import React from "react";
import { Navbar} from "react-bootstrap";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
export function NavBar() {
 
  return (
    <>
 
                <Navbar
                    bg="light"
                    expand="md"
                    className=" d-flex   d-flex justify-content-center  sticky-top shadow"
                >
                    
                        
                        <div className="w-70px">
                        <SVG src={toAbsoluteUrl("/img/min-logo.svg")} />
                      </div>
                     
                    
    
                </Navbar>
              
    </>
  );
}

