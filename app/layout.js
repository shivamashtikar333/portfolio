import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";

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
      <body className={`${bricolage.variable}  antialiased`}>
        <Preloader />
        <section className="fixed top-0 w-full z-[9999]">
          <Header />
        </section>
        {children}
      </body>
    </html>
  );
}
