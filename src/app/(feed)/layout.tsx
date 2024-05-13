import "@/styles/global.css"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

 


import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";
import MainHead from "@/components/MainHeader/MainHead";
import Search from "@/components/Searchpanel/SearchPanel";

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
        <body className={`font-sans ${inter.variable} flex pl-[10vh]`}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
              <MainHead/>
              <ResizablePanelGroup direction="horizontal">
      <ResizablePanel >{children}</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel maxSize={40} className="h-[100vh]" minSize={10}>
        <Search/>
      </ResizablePanel>
    </ResizablePanelGroup>
              
            </ThemeProvider> 
          </body>
      </html>
    </ClerkProvider>
  );
}
