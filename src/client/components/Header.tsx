import * as React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC<IHeaderProps> = () => {
  return (
    <div id="header">
      <NavLink className="nav-link text-dark navLink" to="/">
        <h3 className="text-dark text-center" id="headerTitle">
          She Stylz Too
        </h3>
      </NavLink>
      <div
        id="headerLinks"
        className="d-flex justify-content-around align-items-center p-2"
      >
        <NavLink activeClassName="border-bottom border-dark" className="nav-link text-dark navLink" to="/shop">
          Shop
        </NavLink>
        <NavLink activeClassName="border-bottom border-dark" className="nav-link text-dark navLink" to="/cart">
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export interface IHeaderProps {}

export default Header;
