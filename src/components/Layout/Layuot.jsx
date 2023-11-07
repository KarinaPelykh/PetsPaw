// import { ButtonReaction } from "../ButtonReaction/ButtonReaction";
import { Navigation } from "../Navigatoin/Navigation";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
    // <div>
    //   <div style={{ position: "relative" }}>
    //     <div style={{ position: "absolute", left: "1080px" }}>
    //       <ButtonReaction />
    //     </div>
    //   </div>

    //   <div style={{ display: "flex" }}>
    //     <Navigation />
    //     <Outlet />
    //   </div>
    // </div>
  );
};
