import React from "react";
import Header from "./Header";
import Hero from "./hero";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
}
