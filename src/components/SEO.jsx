import { useEffect } from "react";

const SITE_NAME = "Magical Touch";
const DEFAULT_IMAGE = "/images/yogesh_sir.jpg";

const ROUTE_METADATA = {
  "/": {
    title: "Acupressure Clinic in Mumbai | Magical Touch",
    description:
      "Magical Touch offers non-invasive acupressure consultations in Mumbai for back pain, sciatica, slip disc, knee pain, and mobility concerns.",
  },
  "/conditions": {
    title: "Conditions Treated with Acupressure | Magical Touch Mumbai",
    description:
      "Explore the conditions discussed at Magical Touch, including sciatica, back pain, slip disc, knee pain, arthritis, and mobility concerns.",
  },
  "/science": {
    title: "How Acupressure Works | Magical Touch Mumbai",
    description:
      "Learn how Magical Touch explains acupressure, nerve pressure, mobility, and non-invasive support for chronic pain in Mumbai.",
  },
  "/about": {
    title: "About Yogaysh Lahoti | Magical Touch Acupressure",
    description:
      "Meet Yogaysh Lahoti and learn about the approach behind Magical Touch, an acupressure clinic serving patients in Mumbai.",
  },
  "/testimonials": {
    title: "Patient Stories | Magical Touch Acupressure Mumbai",
    description:
      "Read patient stories and experiences shared about acupressure consultations at Magical Touch in Mumbai.",
  },
  "/contact": {
    title: "Contact Magical Touch Acupressure Clinic in Mumbai",
    description:
      "Contact Magical Touch in Mumbai to ask about an acupressure consultation with Yogaysh Lahoti by phone, email, or WhatsApp.",
  },
};

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO({ path }) {
  useEffect(() => {
    const metadata = ROUTE_METADATA[path] || ROUTE_METADATA["/"];
    const canonicalUrl = new URL(path, window.location.origin).href;

    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta(
      "property",
      "og:image",
      new URL(DEFAULT_IMAGE, window.location.origin).href,
    );
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);
    setMeta(
      "name",
      "twitter:image",
      new URL(DEFAULT_IMAGE, window.location.origin).href,
    );

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.head.querySelector(
      'script[data-seo="local-business"]',
    );
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.dataset.seo = "local-business";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      name: SITE_NAME,
      description: metadata.description,
      url: window.location.origin,
      image: new URL(DEFAULT_IMAGE, window.location.origin).href,
      telephone: "+91 91522 92507",
      email: "magicaltouchmumbai@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      areaServed: "Mumbai",
      founder: {
        "@type": "Person",
        name: "Yogaysh Lahoti",
      },
      openingHours: "Mo-Sa 10:00-20:00",
    });
  }, [path]);

  return null;
}
