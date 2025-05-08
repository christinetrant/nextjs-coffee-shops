import "./globals.css";
import type { Metadata } from "next";
import { 
  IBM_Plex_Sans, 
  // Inter
} from "next/font/google";
import myFont from "next/font/local";

// This font is not a variable font so needs to have weights added
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
// });

const lexendDeca = myFont({
  src: '../public/fonts/LexendDeca.ttf',
  variable: "--font-lexend-deca",
  display: "swap",
})



export const metadata: Metadata = {
  title: "Coffee Shops Nearby",
  description: "Discover your local coffee shops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Make the font variable names available to the entire app
    <html lang="en" className={`${ibmPlexSans.variable} ${lexendDeca.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
