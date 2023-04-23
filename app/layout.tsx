import Footer from "./footer";
import "./globals.css";
import { Header } from "./header";
import { Ubuntu } from "@next/font/google";

const ubuntu = Ubuntu({
  subsets: ["cyrillic-ext"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-darkBlue">
        <main className={ubuntu.className}>
          <Header />
          <main className="bg-[#F6F6F6]">{children}</main>
          <Footer />
        </main>
      </body>
    </html>
  );
}
