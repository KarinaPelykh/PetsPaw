import { Navigation } from "../Navigatoin/Navigation";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
};
