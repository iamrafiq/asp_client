import React from "react";
import "../style.css";

const Layout = ({className, children }) => (
  <div className="text-center">
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
