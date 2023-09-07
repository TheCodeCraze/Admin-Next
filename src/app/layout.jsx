import "./globals.css";
import { Inter } from "next/font/google";
import UserContextProvider from "@/context/UserContext";
import MainLayout from "@/components/MainLayout/MainLayout";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Admin",
    template: "%s | Admin",
  },
  description: "Developed By Tamil Iniyan S",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <MainLayout>{children}</MainLayout>
        </UserContextProvider>
      </body>
    </html>
  );
}
