import { useEffect } from "react";

const SITE_NAME = "Magical Touch";
const DEFAULT_IMAGE = "/images/yogesh_sir.jpg";

const ROUTE_METADATA = {
  "/": {
    title: "Acupressure Home Visit (Pan India) | Magical Touch",
    description:
      "Magical Touch offers non-invasive acupressure home visit consultations across Pan India for back pain, sciatica, slip disc, knee pain, and mobility concerns.",
  },
  "/conditions": {
    title: "Conditions Treated with Acupressure | Magical Touch Home Visit Pan India",
    description:
      "Explore the conditions treated at Magical Touch through home visit consultations across Pan India, including sciatica, back pain, slip disc, knee pain, and arthritis.",
  },
  "/science": {
    title: "How Acupressure Works | Magical Touch Home Visit Pan India",
    description:
      "Learn how Magical Touch explains acupressure, nerve pressure, mobility, and non-invasive support for chronic pain through home visits across Pan India.",
  },
  "/about": {
    title: "About Yogaysh Lahoti | Magical Touch Acupressure Home Visit Pan India",
    description:
      "Meet Yogaysh Lahoti and learn about the approach behind Magical Touch, providing home visit acupressure care across Pan India.",
  },
  "/testimonials": {
    title: "Patient Stories | Magical Touch Acupressure Home Visit Pan India",
    description:
      "Read patient stories and experiences shared about acupressure home visit consultations at Magical Touch across Pan India.",
  },
  "/contact": {
    title: "Contact Magical Touch Acupressure Home Visit Pan India",
    description:
      "Contact Magical Touch to book a home visit acupressure consultation with Yogaysh Lahoti by phone, email, or WhatsApp across Pan India.",
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
        addressLocality: "Pan India",
        addressRegion: "India",
        addressCountry: "IN",
      },
      areaServed: "Pan India",
      founder: {
        "@type": "Person",
        name: "Yogaysh Lahoti",
      },
      openingHours: "Mo-Sa 10:00-20:00",
    });
  }, [path]);

  return null;
}
