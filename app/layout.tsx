import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import Cursor from "@/src/components/Cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Cursor />
        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}