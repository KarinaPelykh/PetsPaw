import "./App.css";
import { Voting } from "./components/Voting/Votimg";
import { Breeds } from "./components/Breeds/Breeds";
import { HomePage } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layuot";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
