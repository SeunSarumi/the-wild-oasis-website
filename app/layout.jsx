import Logo from "@/app/_components/Logo";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beutiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className}  antialiased min-h-screen bg-primary-950 text-primary-100 flex flex-col `}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12 1">
          <main className="w-full mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
