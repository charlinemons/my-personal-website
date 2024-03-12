import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div className="col-md-2">
            <NavLink to="/" activeStyle>
              Charline Mons
            </NavLink>
          </div>
          <div className="col-md-10 d-flex justify-content-end">
            <NavLink to="/" activeStyle>
              home
            </NavLink>
            <span>•</span>
            <NavLink to="/projects" activeStyle>
              projects
            </NavLink>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
