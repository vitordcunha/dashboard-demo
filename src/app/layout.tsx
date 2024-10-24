import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/_components/sidebar";
import Header from "@/_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Sales dashboard demo",
};

/**
 * Root layout component for the application.
 * This component defines the overall structure of the application, including the sidebar and header.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered HTML structure for the root layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#F7F7F9]"}>
        <div className="flex h-screen w-screen">
          <Sidebar />

          <div className="flex flex-col w-full">
            <Header />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
