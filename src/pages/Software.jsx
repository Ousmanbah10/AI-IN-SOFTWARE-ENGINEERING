import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "../Components/softwarebody.css";
import "../Components/Navigation.css";
import "../Components/Body.css";
import "../Components/footer.css";
import "../Components/navMain.css";
import "../Components/footer.css";

import NavigationMain from "../Components/navigation-main.jsx";
import SoftwareBody from "../Components/SoftwareBody.jsx";
import Footer from "../Components/Footer.jsx";

function Software() {
  return (
    <>
      <NavigationMain />

      <SoftwareBody />
      <Footer />
    </>
  );
}

export default Software;
