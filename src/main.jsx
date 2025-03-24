import { StrictMode } from "react";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./Components/Navigation.css";
import "./Components/Body.css";
import "./Components/footer.css";
import "./Components/navMain.css";

import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import Navigation from "./Components/nav.jsx";
import NavigationMain from "./Components/navigation-main";
import SoftwareBody from "./Components/SoftwareBody.jsx";

import Home from "./pages/Home.jsx";
import Software from "./pages/Software.jsx";
import Employment from "./pages/Employment.jsx";
import Education from "./pages/Education.jsx";
import Investment from "./pages/Investment.jsx";
import References from "./pages/References.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Software" element={<Software />} />
      <Route path="/Employment" element={<Employment />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/Investment" element={<Investment />} />
      <Route path="/References" element={<References />} />
    </Routes>
  </BrowserRouter>
);
