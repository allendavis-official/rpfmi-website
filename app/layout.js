import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/lib/sanity";
import { settingsQuery } from "@/lib/queries";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RPFMI - Redemption Praise Fire Ministry International",
  description: "The House of Restoration",
};

async function getSettings() {
  try {
    const settings = await client.fetch(settingsQuery);
    return settings;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return null;
  }
}

export default async function RootLayout({ children }) {
  const settings = await getSettings();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
