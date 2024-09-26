// src/components/Home/Home.js
import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";

<Helmet>
  <title>Mr. Tennis - Home</title>
  <meta
    name="description"
    content="Bem-vindo ao Mr. Tennis. Aprenda, jogue e divirta-se com o melhor do tênis."
  />

  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Mr. Tennis - Home" />
  <meta
    property="og:description"
    content="Aprenda, jogue e divirta-se com o melhor do tênis."
  />
  <meta
    property="og:image"
    content="https://yourwebsite.com/images/og-image.jpg"
  />
  <meta property="og:url" content="https://yourwebsite.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:title" content="Mr. Tennis - Home" />
  <meta
    name="twitter:description"
    content="Aprenda, jogue e divirta-se com o melhor do tênis."
  />
  <meta
    name="twitter:image"
    content="https://yourwebsite.com/images/twitter-image.jpg"
  />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>;

function Home() {
  return (
    <>
      <Helmet>
        <title>Mr. Tennis - Home</title>
        <meta
          name="description"
          content="Bem-vindo ao Mr. Tennis. Aprenda, jogue e divirta-se com o melhor do tênis."
        />
      </Helmet>
      <Hero />
      <Services />
    </>
  );
}

export default Home;
