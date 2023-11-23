// import { Suspense } from "react";
import { Navigation } from "../Navigatoin/Navigation";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Navigation />
      {/* <Suspense> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};
// export default Layout;
