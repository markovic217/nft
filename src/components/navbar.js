import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function navbar() {
  const imena = ["Home", "Market", "Create", "About"];
  const nav = imena.map((ime) => {
    return (
      <div  className="ime" key={ime}>
        <NavLink className={(navData) => {return navData.isActive ? "active" : "inactive"}} to={"/" + ime}>
          <div>{ime}</div>
        </NavLink>
      </div>
    );
  });
  return <div className="nav">{nav}</div>;
}

export default navbar;
