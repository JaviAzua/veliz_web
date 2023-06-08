import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Veliz - Articulos de limpieza",
  description:
    "Veliz, una compania dedidcada a la venta y distribucion de articulos de limpieza desde 1976",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className={roboto.className}>{children}</main>
      </body>
    </html>
  );
}
