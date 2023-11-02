import "./App.css";
import { Voting } from "./pages/Voting/Votimg";
import { Breeds } from "./pages/Breeds/Breeds";
import { HomePage } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layuot";
import { Gallery } from "./pages/Gallery/Gallery";
import { Favourites } from "./pages/VotinReaction/Favourites/Favourites";
import { DislikePage } from "./pages/VotinReaction/DislikePage/DisLikePage";
import { LikePage } from "./pages/VotinReaction/LikePage/LikePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/voting" element={<Voting />} />

          <Route path="/breeds" element={<Breeds />}>
            <Route path="heart" element={<Favourites />} />
            <Route path="sad" element={<DislikePage />} />
            <Route path="smile" element={<LikePage />} />
          </Route>

          <Route path="/gallery" element={<Gallery />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
