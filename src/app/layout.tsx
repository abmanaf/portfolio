import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulmanaf Aliu | Frontend Developer, Data Science & Machine Learning",
  description:
    "Abdulmanaf Aliu builds modern web applications and data-driven solutions across frontend development, data analytics, statistical modelling and applied machine learning.",
  openGraph: {
    title: "Abdulmanaf Aliu | Frontend Developer, Data Science & Machine Learning",
    description:
      "Frontend engineering, data analytics and applied machine learning.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
