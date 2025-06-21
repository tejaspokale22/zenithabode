// next-seo.config.js
const SEO = {
  title: "My Website",
  description: "This is my amazing website built with Next.js.",
  canonical: "https://www.mywebsite.com",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mywebsite.com",
    site_name: "My Website",
    images: [
      {
        url: "https://www.mywebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
export default SEO;
