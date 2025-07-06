"use client";

import Head from "next/head";
import * as Sentry from "@sentry/nextjs";

export default function Page() {
  return (
    <div>
      <Head>
        {/* Title & Description for SEO */}
        <title>Mohamed Al-Taher Portfolio</title>
        <meta
          name="description"
          content="Welcome to the Mohamed Al-Taher portfolio – showcasing front-end projects, React skills, and modern web development work."
        />

        {/* Open Graph Meta Tags for LinkedIn, Facebook, etc. */}
        <meta property="og:title" content="Mohamed Al-Taher Portfolio" />
        <meta
          property="og:description"
          content="Explore Mohamed Al-Taher’s front-end projects, React applications, and modern web development skills."
        />
        <meta
          property="og:image"
          content="https://pro-mohamed-portfolio.netlify.app/"
        />
        <meta property="og:url" content="https://pro-mohamed-portfolio.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (Optional, for Twitter previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohamed Al-Taher Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Mohamed Al-Taher’s front-end projects and web development skills."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/preview.jpg"
        />
      </Head>

      {/* Your existing content */}
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "14px 0" }}>
          {/* Your existing SVG */}
        </h1>

        <p>Get started by sending us a sample error:</p>
        {/* Your existing button and links */}
      </main>
    </div>
  );
}