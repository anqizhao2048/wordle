import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RulePage from "./pages/RulePage";
import NormalGamePage from "./pages/NormalGamePage";
import HardGamePage from "./pages/HardGamePage";
import Header from "./components/Header";

function App() {

  return (
      <div>
          <Header />
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/rule" element={<RulePage />} />
              <Route path="/normal-game" element={<NormalGamePage />} />
              <Route path="/hard-game" element={<HardGamePage />} />
          </Routes>
      </div>
  );
}

export default App;
