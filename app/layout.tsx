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
        {children}
        <Footer />
      </body>
    </html>
  );
}
