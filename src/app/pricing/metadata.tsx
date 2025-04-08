import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driving Lessons Pricing | Aonedrivings",
  description:
    "Affordable driving lesson packages in Toronto. Get professional training and road test preparation from certified instructors. Book now!",
  keywords: [
    "driving school Toronto",
    "driving lessons",
    "road test preparation",
    "G2 test",
    "G test",
    "beginner driver education",
  ],
  authors: [{ name: "Aonedrivings" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Driving Lessons Pricing | Aonedrivings",
    description:
      "Choose from a variety of driving lesson packages in Toronto. Get expert training and pass your road test with confidence!",
    images: ["https://aonedrivings.com/logo.jpg"],
    url: "https://aonedrivings.com/pricing",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driving Lessons Pricing | Aonedrivings",
    description:
      "Affordable and professional driving lessons in Toronto. Book your lessons and road test package today!",
    images: ["https://aonedrivings.com/logo.jpg"],
    site: "@YourTwitterHandle",
  },
  alternates: {
    canonical: "https://aonedrivings.com/pricing",
  },
};
