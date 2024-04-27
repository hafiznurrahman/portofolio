import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Helmet>
      <title>Portofolio Hafiz Nur Rahman - Front End Developer</title>
      <meta
        name="keywords"
        content="portofolio, portfolio, hafiz, nur, rahman, front end, developer, web developer, projects, programmer, junior"
      />
      <meta
        name="description"
        content="Portofolio Hafiz Nur Rahman sebagai front-end developer."
      />
      <meta
        property="og:title"
        content="Portofolio Hafiz Nur Rahman - Front End Developer"
      />
      <meta
        property="og:description"
        content="Portofolio Hafiz Nur Rahman sebagai front-end developer."
      />
      <meta
        property="og:image"
        content="/assets/project_thumbnail/thumbnail_portofolio.webp"
      />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Portofolio Hafiz Nur Rahman - Front End Developer"
      />
      <meta
        name="twitter:description"
        content="Portofolio Hafiz Nur Rahman sebagai front-end developer."
      />
      <meta
        name="twitter:image"
        content="/assets/project_thumbnail/thumbnail_portofolio.webp"
      />
      <link
        rel="canonical"
        href="https://portofoliohafiznurrahman.vercel.app/"
      />
    </Helmet>
    <HomePage />
  </React.StrictMode>
);
