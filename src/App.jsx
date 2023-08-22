import "./App.css";
import { Voting } from "./components/Voting/Votimg";
// import { Breeds } from "./components/Breeds/Breeds";
import { HomePage } from "./pages/Home/Home";

function App() {
  return (
    <>
      <HomePage />
      <Voting />
      {/* <Breeds /> */}
    </>
  );
}

export default App;
