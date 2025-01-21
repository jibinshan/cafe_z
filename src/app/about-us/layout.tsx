import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "About Bruncho",
  description:
    "Learn about Bruncho journey from a small eatery to a celebrated dining destination. With a focus on quality, sustainability, and an unforgettable atmosphere, Ora brings culinary artistry to every plate.",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
  keywords:
    "Bruncho, best steak Woolton Village, sustainable dining, fine dining Liverpool, about Bruncho, premium beef cuts, chef-selected steaks, dining experience Liverpool",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
