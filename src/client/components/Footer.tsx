import * as React from "react";
import { NavLink } from "react-router-dom";
import Media from "./Media";

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div
      id="Footer"
      className="bg-dark d-flex flex-column justify-content-center align-items-center p-2"
    >
      <Media />
      <div className="d-flex justify-content-around align-items-center p-2">
        <NavLink
          activeClassName="border-bottom border-dark"
          className="nav-link text-light"
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          activeClassName="border-bottom border-dark"
          className="nav-link text-light"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          activeClassName="border-bottom border-dark"
          className="nav-link text-light"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export interface IFooterProps {}

export default Footer;
