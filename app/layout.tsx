import "./globals.css";
import { Changa_One } from "next/font/google";

export const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-changa-one",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={changaOne.variable}>{children}</body>
    </html>
  );
}
