import Footer from "./footer";
import "./globals.css";
import { Header } from "./header";
import { Ubuntu } from "next/font/google";
// import Error from "./error";

const ubuntu = Ubuntu({
  subsets: ["cyrillic-ext"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Afrasiab Travel",
  description:
    "Туристическая компания “Afrasiab Travel” приглашает вас посетить Узбекистан",
};

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
          {/* <ErrorBoundary fallback={<Error />}> */}
            <main className="bg-[#F6F6F6] pt-[75px]">{children}</main>
          {/* </ErrorBoundary> */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
