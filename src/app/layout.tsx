import "@/styles/global.css"

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/compnents/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/compnents/Header/Header";
import AI from "@/compnents/AI";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "Canvas-AI",
    template: "%s | Canvas-AI",
  },
  description: "A online art evaluator and marketplace for all art fanatics",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
              <Header />
              {children}
            </ThemeProvider> 
            <AI /> 
          </body>
      </html>
    </ClerkProvider>
  );
}
