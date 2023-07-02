import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
//import Navbar from "./components/NAVBAR/Navbar";
import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageContact from "./pages/PageContact";
import PageInsight from "./pages/PageInsight";
import PageOrder from "./pages/PageOrder";
import Login from "./components/LOGIN/Login";
import SignUP from "./components/SignUp/SignUp";

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
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUP />} />
        
        </Routes>
      </Router> 
      
    </>
  );
}
export default App;
