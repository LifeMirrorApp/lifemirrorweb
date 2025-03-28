import { React, useEffect, useRef, useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { useSidebar } from "./SidebarProvider";
import "./admin.css";
const Admin = () => {
  const { isSidebarOpen } = useSidebar(); // use context to get sidebar state
  return (
    <div>
      <body>
        <div className={`main-wrapper ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <SideNav />
          <TopNav />

          <p>Hello World</p>
        </div>
      </body>
    </div>
  );
};

export default Admin;
