// src/app/pages/_app.js
import '../styles/globals.css'; // Import global styles
import '../styles/base.scss';
import '../styles/loader.scss';
import '../styles/landing.scss';
import '../styles/animLinks.scss';
import '../styles/skills.scss';
import '../styles/projects.scss';
import '../styles/contact.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
