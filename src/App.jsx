import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/nav/NavBar";
import FindTreatment from "./screens/findTreatment/FindTreatment";
import StomachFluPage from "./screens/stomachFlu/StomachFluPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<FindTreatment />} />
        <Route path="/treatment-stomach-flu" element={<StomachFluPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
