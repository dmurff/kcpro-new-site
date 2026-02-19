import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./components/AuthProvider";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KC Pro Assembly",
  description:
    "Hoop sales with professional assembly and installation services in the Kansas City area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* <script src="https://cdn.tailwindcss.com"></script> */}</head>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <Toaster position="top-center" />
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
