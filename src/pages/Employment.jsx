import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "../Components/employmentbody.css";
import "../Components/footer.css";
import "../Components/navMain.css";

import EmploymentBody from "../Components/EmploymentBody.jsx";
import NavigationMain from "../Components/navigation-main.jsx";
import Footer from "../Components/Footer.jsx";

function Employment() {
  return (
    <>
      <NavigationMain />
      <EmploymentBody />
      <Footer />
    </>
  );
}

export default Employment;
