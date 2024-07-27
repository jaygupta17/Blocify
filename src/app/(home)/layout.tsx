import "@/styles/global.css"

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header/Header";
import AI from "@/components/AI";
import Footer from "@/components/Footer/Footer";
import { Web3Provider } from "@/web3provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "Blockify",
    template: "%s | Blockify",
  },
  description: "A online art evaluator and marketplace for all art fanatics",
  icons: [{ rel: "icon", url: "./logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable}`}>
          <Web3Provider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
              <Header />
              {children}
              <Footer/>
            </ThemeProvider> 

            <AI /> 
            </Web3Provider>
          </body>
      </html>
    </ClerkProvider>
  );
}
