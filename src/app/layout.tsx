import "@styles/globals.css";
import { Inter } from "next/font/google";
import { MainContainer } from "@components/layout/MainContainer";
import { Header } from "@components/header/Header";
import { Footer } from "@components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Essential Estate",
  description: "Essential Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContainer>
          <Header></Header>
          <div className="flex-1">{children}</div>
          <Footer></Footer>
        </MainContainer>
      </body>
    </html>
  );
}
