import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/NavBar";
import { GlobalProvider } from "@/app/globalProvider";

const inter = Kantumruy_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Computer Shop",
  description: "Made By KonKhmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <Navbar />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
