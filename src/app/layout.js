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

        <link rel="shortcut icon" href="/icon.png" />
        <meta name="msapplication-TileColor" content="black" />
        <meta name="theme-color" content="black" />

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
