import React from "react";
import { Outlet } from "react-router-dom";

//components
import Navibar from "../../components/Navibar/Navibar";
import AlertDismissible from "../../components/ErrorAlert/ErrorAlert";

const Main = () => {
  return (
    <>
      <Navibar />
      <div className="mt-5">
        <AlertDismissible />
        <Outlet />
      </div>
    </>
  );
};

export default Main;
