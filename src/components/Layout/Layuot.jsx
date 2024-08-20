import { Navigation } from "../Navigatoin/Navigation";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
export const Layout = () => {
  return (
    <div className={css.wrapper}>
      <Navigation />
      <Outlet />
    </div>
  );
};
