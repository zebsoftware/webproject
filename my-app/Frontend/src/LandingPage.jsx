import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Categories from "./Categories";
import Discount from "./Discount";
import FeaturedProducts from "./FeaturedProducts";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function LandingPage() {
  return (
    <>
      <Header/>
      <Hero />
      <Categories />
      <Discount />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default LandingPage;
