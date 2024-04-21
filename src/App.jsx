import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Stakeholder from "./components/Stakeholder";
import FindTreatment from "./screens/findTreatment/FindTreatment";


function App() {

  return (

  <BrowserRouter>
      <Stakeholder/>
      <NavBar  />
      <Routes>
        <Route path="/" element={<FindTreatment />} />
      </Routes>
      <Footer />
  </BrowserRouter>
    
    
  );
}

export default App;