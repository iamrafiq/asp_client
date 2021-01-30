import React from "react";
import "../style.css";

const Layout = ({className, children }) => (
  <div>
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
