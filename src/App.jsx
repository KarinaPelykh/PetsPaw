import "./App.css";
// import { Voting } from "./components/Voting/Votimg";
// import { Breeds } from "./components/Breeds/Breeds";
import { HomePage } from "./pages/Home/Home";
// import { BreedaaImeges } from "./components/BreedaaImeges/BreeadImeges";
// import { Routes, Route } from "react-router-dom";
// import { Layout } from "./components/Layout/Layuot";
function App() {
  return (
    <>
      <HomePage />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
