import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import React from "react";

const HomePage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      <Hero />
      <HowItWorks />
    </section>
  );
};

export default HomePage;
