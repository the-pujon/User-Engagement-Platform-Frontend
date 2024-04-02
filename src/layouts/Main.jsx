import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex" >
      {/*<Sidebar />*/}
      <Outlet />
    </div>
  );
};

export default Main;
