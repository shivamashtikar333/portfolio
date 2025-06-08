import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shivam Ashtikar | Portfolio",
  description:
    "Portfolio of Shivam Ashtikar, a software engineer specializing in web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable}  antialiased`}>{children}</body>
    </html>
  );
}
