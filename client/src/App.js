import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import Navbar from "./components/NAVBAR/Navbar";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageContact from "./pages/PageContact";
import PageInsight from "./pages/PageInsight";
import PageOrder from "./pages/PageOrder";
import PageTeam from "./pages/PageTeam";
import PageLogin from "./pages/PageLogin";
import PageSignUp from "./pages/PageSignUp";
import PagePayment from "./pages/PagePayment";
import PageRiwayat from "./pages/PageRiwayat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/About" element={<PageAbout />} />
          <Route path="/Order" element={<PageOrder />} />
          <Route path="/Contact" element={<PageContact />} />
          <Route path="/Insight" element={<PageInsight />} />
          <Route path="/Team" element={<PageTeam />} />
          <Route path="/Login" element={<PageLogin />} />
          <Route path="/SignUp" element={<PageSignUp />} />
          <Route path="/Payment" element={<PagePayment />} />
          <Route path="/Riwayat" element={<PageRiwayat />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
