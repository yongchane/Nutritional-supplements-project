import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Health from "./components/Health";

const Main = () => {
  const location = useLocation();
  const notShowHealthPath = ["/main/bmi"];
  const notShowHealth = !notShowHealthPath.includes(location.pathname);
  return (
    <div className="health">
      {notShowHealth && <Health />}
      <Outlet />
    </div>
  );
};

export default Main;
