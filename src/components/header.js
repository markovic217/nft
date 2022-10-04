import React from "react";
import NavBar from "./navbar.js";
import headerClass from "./header.module.css";
function header() {
  return (
    <div>
      <div className={headerClass.show}></div>
      <div className={headerClass.header}>
        <div className={headerClass.container}>
          <div>Logo placeholder</div>
          <input className={headerClass.search} type="text" />
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default header;
