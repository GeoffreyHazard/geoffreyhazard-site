import React from "react";
import {Outlet} from "react-router-dom";
import Banner from "./Banner";

const Layout = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};

export default Layout;