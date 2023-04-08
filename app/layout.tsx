import Footer from "./footer";
import "./globals.css";
import { Header } from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-darkBlue">
        <Header />
        <main className="bg-[#F6F6F6]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
