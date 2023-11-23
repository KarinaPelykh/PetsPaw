import { Voting } from "./pages/Voting/Voting";
import { Breeds } from "./pages/Breeds/Breeds";
import { HomePage } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layuot";
import { Gallery } from "./pages/Gallery/Gallery";
import { Favourites } from "./pages/VotinReaction/Favourites/Favourites";
import { DislikePage } from "./pages/VotinReaction/DislikePage/DisLikePage";
import { LikePage } from "./pages/VotinReaction/LikePage/LikePage";
import { NotFond } from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/voting" element={<Voting />} />

          <Route path="/heart" element={<Favourites />} />
          <Route path="/sad" element={<DislikePage />} />
          <Route path="/smile" element={<LikePage />} />

          <Route path="*" element={<NotFond />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// import { lazy } from "react";
// const Layout = lazy(() => import("./components/Layout/Layuot"));
// const HomePage = lazy(() => import("./pages/Home/Home"));
// const Breeds = lazy(() => import("./pages/Breeds/Breeds"));
// const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
// const Voting = lazy(() => import("./pages/Voting/Voting"));
// const Favourites = lazy(() =>
//   import("./pages/VotinReaction/Favourites/Favourites")
// );
// const DislikePage = lazy(() =>
//   import("./pages/VotinReaction/DislikePage/DisLikePage")
// );
// const LikePage = lazy(() => import("./pages/VotinReaction/LikePage/LikePage"));
// const NotFond = lazy(() => import("./pages/NotFound/NotFound"));
