import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "../Components/employmentbody.css";
import "../Components/footer.css";
import "../Components/navMain.css";
import "../Components/education.css";

import EducationBody from "../Components/EducationBody.jsx";
import NavigationMain from "../Components/navigation-main.jsx";
import Footer from "../Components/Footer.jsx";

function Education() {
  return (
    <>
      <NavigationMain />
      <EducationBody />
      <Footer />
    </>
  );
}

export default Education;
