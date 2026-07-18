import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://hajonsoft.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/android-chrome-512x512.png`;

const ROUTE_SEO = {
  "/": {
    titleId: "seo.home.title",
    descriptionId: "seo.home.description",
  },
  "/privacy-policy": {
    titleId: "seo.privacy.title",
    descriptionId: "seo.privacy.description",
  },
  "/terms-of-service": {
    titleId: "seo.terms.title",
    descriptionId: "seo.terms.description",
  },
  "/about-the-technology": {
    titleId: "seo.technology.title",
    descriptionId: "seo.technology.description",
  },
};

const upsertMeta = (attr, key, content) => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel, href, extra = {}) => {
  const selector = Object.entries(extra).reduce(
    (sel, [k, v]) => `${sel}[${k}="${v}"]`,
    `link[rel="${rel}"]`
  );
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const upsertJsonLd = (id, data) => {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

/**
 * Keeps document title, meta description, Open Graph, and JSON-LD in sync
 * with the active route and UI language.
 */
const SeoHead = ({ language }) => {
  const intl = useIntl();
  const { pathname } = useLocation();

  useEffect(() => {
    const route = ROUTE_SEO[pathname] || ROUTE_SEO["/"];
    const title = intl.formatMessage({ id: route.titleId });
    const description = intl.formatMessage({ id: route.descriptionId });
    const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = title;
    document.documentElement.lang = language || "en";

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "theme-color", "#4090d0");
    upsertMeta("property", "og:type", pathname === "/" ? "website" : "article");
    upsertMeta("property", "og:site_name", "HAJonSoft");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:locale", language === "ar" ? "ar_SA" : language || "en");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

    upsertLink("canonical", canonical);

    const languages = [
      "en",
      "ar",
      "fr",
      "de",
      "hi",
      "it",
      "ja",
      "ms",
      "ru",
      "th",
      "tr",
      "zh",
    ];
    languages.forEach((lang) => {
      upsertLink("alternate", canonical, { hreflang: lang });
    });
    upsertLink("alternate", canonical, { hreflang: "x-default" });

    upsertJsonLd("seo-jsonld-org", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "HAJonSoft",
      alternateName: "Haj On Soft",
      url: SITE_URL,
      logo: `${SITE_URL}/android-chrome-512x512.png`,
      email: "admin@hajonsoft.net",
      telephone: "+1-949-522-1879",
      sameAs: ["https://wa.me/19495221879"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-949-522-1879",
          contactType: "customer support",
          availableLanguage: languages,
        },
      ],
    });

    upsertJsonLd("seo-jsonld-software", {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "HAJonSoft",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE_URL,
      description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Contact for quote",
      },
      provider: {
        "@type": "Organization",
        name: "HAJonSoft",
        url: SITE_URL,
      },
    });

    if (pathname === "/") {
      upsertJsonLd("seo-jsonld-website", {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "HAJonSoft",
        url: SITE_URL,
        inLanguage: languages,
        potentialAction: {
          "@type": "CommunicateAction",
          target: "https://wa.me/19495221879",
        },
      });
    } else {
      const existing = document.getElementById("seo-jsonld-website");
      if (existing) existing.remove();
    }
  }, [intl, language, pathname]);

  return null;
};

export default SeoHead;
