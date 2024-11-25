import React from "react";
import { useLocation } from "react-router-dom";
import Health from "./components/Health";

const Main = () => {
  return (
    <div className="health">
      <Health />
    </div>
  );
};

export default Main;
