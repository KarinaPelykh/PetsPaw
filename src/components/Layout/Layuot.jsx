import { Navigation } from "../Navigatoin/Navigation";
// import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
