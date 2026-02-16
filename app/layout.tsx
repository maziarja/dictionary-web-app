import type { Metadata } from "next";
import "./globals.css";
import { Inconsolata } from "next/font/google";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
// import FontProvider from "./FontProvider";

export const metadata: Metadata = {
  title: {
    default: "Dictionary web app",
    template: "%s | Dictionary web app",
  },
  description:
    "A responsive dictionary web app with real-time search, pronunciation audio, and a bookmark feature to save and review favorite words.",
};

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});
export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} ${inconsolata.variable} `}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      const font = localStorage.getItem("font");
      if (font) {
        document.documentElement.setAttribute("data-font", font);
      }
    `,
          }}
        />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
