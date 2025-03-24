import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "../Components/Navigation.css";
import "../Components/Body.css";
import "../Components/footer.css";
import "../Components/navMain.css";

import Body from "../Components/Body.jsx";

import Navigation from "../Components/nav.jsx";
import NavigationMain from "../Components/navigation-main.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
  return (
    <>
      <Navigation />
      <Body />
      <Footer />
    </>
  );
}

export default Home;
