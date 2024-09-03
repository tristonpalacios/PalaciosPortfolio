import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Triston Palacios Portfolio",
  description:
    "Full Stack Software Developer, Game Maker, Instructor, and guide to building creative software solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Triston, Palacios, Software, Developer"
        />
        <meta name="author" content="Triston Palacios" />

        {/* Favicon and Apple Icons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="assets/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="assets/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="assets/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="assets/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="assets/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="assets/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="assets/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="assets/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="assets/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="assets/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Additional Styles and Scripts */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <script src="assets/js/config.js" />
      </Head>
      <body className={inter.className}>
        {children}
        {/* Bootstrap JS Scripts */}
        <Script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
