import "@/styles/global.css";
import AI from "@/components/AI"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import MainHead from "@/components/MainHeader/MainHead";
import {Search} from "@/components/Searchpanel/SearchPanel";
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
        <body className={`font-sans ${inter.variable} flex pl-[10vh]`}>
          <Web3Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainHead />
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={60}>{children}</ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={40} maxSize={40} className="h-[100vh]" minSize={30}>
                <Search />
                <AI />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ThemeProvider>
          </Web3Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
