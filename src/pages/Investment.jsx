import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "../Components/Investment.css";
import "../Components/footer.css";
import "../Components/navMain.css";

import "../Components/education.css";

import NavigationMain from "../Components/navigation-main.jsx";
import Footer from "../Components/Footer.jsx";
import InvestmentBody from "../Components/InvestmentBody.jsx";

function Investment() {
  return (
    <>
      <NavigationMain />

      <InvestmentBody />
      <Footer />
    </>
  );
}

export default Investment;
