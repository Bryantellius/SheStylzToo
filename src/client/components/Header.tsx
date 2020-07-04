import * as React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC<IHeaderProps> = () => {
  return (
    <div
      id="header"
      className="d-flex justify-content-between align-items-center"
    >
      <h1>Header</h1>
      <div className="d-flex justify-content-around align-items-center">
        <NavLink className="nav-link text-dark" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link text-dark" to="/clothing">
          Clothing
        </NavLink>
        <NavLink className="nav-link text-dark" to="/accessories">
          Accessories
        </NavLink>
      </div>
    </div>
  );
};

export interface IHeaderProps {}

export default Header;
