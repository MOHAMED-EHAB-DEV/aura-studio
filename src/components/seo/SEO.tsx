import React from "react";
import { SITE_URL } from "../../lib/constants";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  ogImage = "/og-image.png",
}) => {
  const fullUrl = `${SITE_URL}${path}`;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage}`;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:image" content={fullOgImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />
    </>
  );
};

export default SEO;
