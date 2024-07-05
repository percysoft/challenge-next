import { Inter } from "next/font/google";
import Header from "../components/Molecules/Header/Header";
import Footer from "../components/Molecules/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <body className={inter.className}>
        <Header username="Victor Percy" userImage="/perfil.png" />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
