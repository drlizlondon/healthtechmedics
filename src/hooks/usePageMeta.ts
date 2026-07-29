import { useEffect } from "react";

interface PageMeta {
  title: string;
  description: string;
}

const upsertMeta = (attribute: "name" | "property", key: string, value: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", value);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

/**
 * Sets per-route title, description, social tags and canonical URL.
 *
 * The site is a single page app, so without this every route inherits the
 * title in index.html and search results collapse onto one entry.
 */
const usePageMeta = ({ title, description }: PageMeta) => {
  useEffect(() => {
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("property", "og:url", window.location.href);
    upsertCanonical(window.location.href);
  }, [title, description]);
};

export default usePageMeta;
