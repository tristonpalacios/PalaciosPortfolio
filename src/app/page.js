"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";
import useSmoothScrollbar from "./hooks/useSmoothScrollbar";
import Shaded from "./components/Shaded";
import ThreeBg from "./components/ThreeBg";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Socials from "./components/Socials";
import ScrollDown from "./components/ScrollDown";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageHead from "next/head";
import "../styles/base.scss";
import "../styles/loader.scss";
import "../styles/landing.scss";
import "../styles/skills.scss";
import "../styles/projects.scss";
import "../styles/contact.scss";
import "../styles/animLinks.scss";

export default function Home() {
  const [imagesLoadedFlag, setImagesLoadedFlag] = useState(false);
  const barRef = useRef(null);
  const loadingPercentRef = useRef(null);
  let counter = 0;

  useSmoothScrollbar(imagesLoadedFlag);

  useEffect(() => {
    barRef.current = document.querySelector(".loading__bar--inner");
    loadingPercentRef.current = document.querySelector(
      ".loading__counter--number"
    );

    const bar = barRef.current;
    const loadingPercent = loadingPercentRef.current;

    const barInterval = setInterval(() => {
      bar.style.width = counter + "%";
      loadingPercent.innerText = `${counter}%`;
      counter++;
      if (counter === 101) {
        clearInterval(barInterval);
        gsap.to(".loading__bar", {
          duration: 5,
          rotate: "90deg",
          left: "1000%",
          bottom: "250%",
        });
        gsap.to(".loading__text, .loading_counter", {
          duration: 1,
          opacity: 0,
        });

        gsap.to(".loading__svg", {
          duration: 10,
          opacity: 1,
          rotate: "360deg",
          zIndex: -5,
        });

        gsap.to(".loading__box", {
          duration: 2,
          border: "none",
        });

        imagesLoaded(document.querySelectorAll("img"), () => {
          gsap.to(".loading", {
            delay: 2,
            duration: 2,
            zIndex: 1,
            background: "transparent",
            opacity: 0.0,
          });

          gsap.to("header", {
            duration: 1,
            delay: 2,
            top: "0",
            zIndex: 1,
          });
          gsap.to(".socials", {
            duration: 1,
            delay: 2.5,
            bottom: "5rem",
            zIndex: "1",
          });

          gsap.to(".scrollDown", {
            duration: 1,
            delay: 3,
            bottom: "3rem",
            zIndex: "1",
          });

          setTimeout(() => {
            setImagesLoadedFlag(true);
          }, 2000);
        });
      }
    }, 10);

    return () => clearInterval(barInterval);
  }, []);

  return (
    <>
      <PageHead />
      <Loading />
      <div className="landing">
        <div>
          <ThreeBg />
        </div>

        <Header />
        <Intro />
        <div className="scroll-container">
          <Shaded />
          <Socials />
          <ScrollDown />
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
