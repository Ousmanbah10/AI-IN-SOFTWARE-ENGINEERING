import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "../Components/references.css";
import "../Components/footer.css";
import "../Components/navMain.css";
import "../Components/education.css";

import References from "../Components/References.jsx";
import NavigationMain from "../Components/navigation-main.jsx";
import Footer from "../Components/Footer.jsx";

function Reference() {
  return (
    <>
      <NavigationMain />
      <References />
      <Footer />
    </>
  );
}

export default Reference;
