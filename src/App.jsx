import "tailwindcss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { Routes, Route, useLocation } from "react-router-dom";
import Explore from "./components/Explore";
import { useEffect } from "react";
import History from "./components/History";
import Structure from "./components/Structure";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" }, 100);
        });
      }
    }
  }, [location]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home />
              <AboutUs />
              <Structure />
              <ContactUs />
            </>
          }
        />

        <Route path='/explore' element={<Explore />} />
        <Route path='/history' element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
