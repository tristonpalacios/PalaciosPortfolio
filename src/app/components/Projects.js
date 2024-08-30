import { Card, Row, Col, Carousel } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const photos = [
  {
    src: "/assets/images/loaders/Tagilla.png",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
  {
    src: "/assets/images/loaders/PropitalAmmo1.png",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
];

const TensorFlowCertPhotos = [
  {
    src: "/assets/images/loaders/tensorflow.png",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
];

const NSSPhotos = [
  {
    src: "/assets/images/loaders/dos.jpeg",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
  {
    src: "/assets/images/loaders/dos2.jpg",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
  {
    src: "/assets/images/loaders/dos3.png",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
  {
    src: "/assets/images/loaders/moni1.jpeg",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
  {
    src: "/assets/images/loaders/moni2.jpg",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
  {
    src: "/assets/images/loaders/moni3.png",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
  {
    src: "/assets/images/loaders/Sponge3.gif",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
];

const Projects = () => {
  const linksRef = useRef([]);

  useEffect(() => {
    function adjustSVGWidth() {
      linksRef.current.forEach((link) => {
        const linkText = link.querySelector(".linkText");
        const linkSVG = link.querySelector("svg");
        const textWidth = linkText.offsetWidth;
        linkSVG.setAttribute("viewBox", `0 0 ${textWidth} 9`);
        linkSVG.style.width = `${textWidth}px`;
      });
    }

    adjustSVGWidth();

    window.addEventListener("resize", adjustSVGWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustSVGWidth);
    };
  }, []);

  return (
    <div id="Projects">
      <h1 className="projects__header">What I've Been Up To</h1>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5 flex-fill">
            <Carousel controls={false} indicators={false} interval={3000}>
              {photos.map((photo, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-image-wrapper">
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">
                <div className="project__header">
                  <span className="projectHighlight">Propital</span>
                  <span> Discord Bot</span>
                </div>
              </h5>

              <div className="card-text">
                <ul className="pHighlightList">
                  <li>
                    <MdKeyboardDoubleArrowRight />
                    Completely Custom <FaDiscord className="coloredIcon" /> Bot
                  </li>
                  <li>
                    <MdKeyboardDoubleArrowRight />
                    Complex Logic to Consolidate User Searches
                  </li>
                  <li>
                    <MdKeyboardDoubleArrowRight />
                    Developed using Discord Developer Best Practices
                  </li>
                  <li>
                    <MdKeyboardDoubleArrowRight />
                    Hosted and Live for Public Use via BISECT Hosting
                  </li>
                </ul>
              </div>

              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <a
                      href="https://discord.com/oauth2/authorize?client_id=1249851690580971662"
                      title="Link to add Propital to discord server"
                      target="_blank"
                      className="coolCircleEyeButton"
                    >
                      <svg className="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          />
                        </defs>
                        <text>
                          <textPath
                            xlinkHref="#textcircle"
                            aria-label="Click to see Certification"
                            textLength="900"
                          >
                            Click to add Bot To Discord
                          </textPath>
                        </text>
                      </svg>
                      <svg
                        className="eye"
                        aria-hidden="true"
                        viewBox="0 0 70 70"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="eye__outer"
                          d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z"
                        />
                        <path
                          className="eye__lashes--up"
                          d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192"
                        />
                        <path
                          className="eye__lashes--down"
                          d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z"
                        />
                        <circle
                          className="eye__iris"
                          cx="35"
                          cy="35.31"
                          r="5.221"
                        />
                        <circle
                          className="eye__inner"
                          cx="35"
                          cy="35.31"
                          r="10.041"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="col">
                    <span className="paddingButton">
                      <a
                        href="https://github.com/tristonpalacios/Propital"
                        title="Propital GitHub"
                        target="_blank"
                      >
                        <button className="animButton">
                          <span>
                            <FaGithub className="coloredIcon" size={"2em"} />
                          </span>
                        </button>
                      </a>
                    </span>
                  </div>
                  <div className="col">
                    <div className="icons d-flex mb-3 justify-content-between flex-grow-1">
                      {["PYTHON", "API", "BOT"].map((title, index) => (
                        <a
                          key={index}
                          href="#"
                          title={title}
                          className="animSVGLink icon"
                          ref={(el) => (linksRef.current[index] = el)}
                        >
                          <span className="linkText">{title}</span>
                          <svg width="100%" height="9" viewBox="0 0 101 9">
                            <path
                              d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 3.748 6.642-4.141 10.066-4.688 2.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
                              pathLength="1"
                              fill="none"
                              stroke="#000"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">
                <div className="project__header">
                  <span className="projectHighlight">Assortment</span>
                  <span> Tensorflow </span>
                </div>
              </h5>
              <ul className="pHighlightList card-text">
                <li>
                  <MdKeyboardDoubleArrowRight />
                  Earned the official Tensorflow Developer Certificate
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  Developed a multivariate time series model predicting future
                  S&P 500 prices using economic indicators (interest rates,
                  unemployment, CPI, VIX).
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  Conjured a spam detection A.I. with the Universal Sentence
                  Encoder, achieving 98% accuracy on validation data.
                </li>
              </ul>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <a
                      href="https://www.credential.net/bf31a571-6287-4565-985b-05ba45752a0c#gs.e6oa7n"
                      title="See my Certificate"
                      target="_blank"
                      className="coolCircleEyeButton"
                    >
                      <svg className="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          />
                        </defs>
                        <text>
                          <textPath
                            xlinkHref="#textcircle"
                            aria-label="Click to see Certification"
                            textLength="900"
                          >
                            Click to see Certification
                          </textPath>
                        </text>
                      </svg>
                      <svg
                        className="eye"
                        aria-hidden="true"
                        viewBox="0 0 70 70"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="eye__outer"
                          d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z"
                        />
                        <path
                          className="eye__lashes--up"
                          d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192"
                        />
                        <path
                          className="eye__lashes--down"
                          d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z"
                        />
                        <circle
                          className="eye__iris"
                          cx="35"
                          cy="35.31"
                          r="5.221"
                        />
                        <circle
                          className="eye__inner"
                          cx="35"
                          cy="35.31"
                          r="10.041"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="col">
                    <span className="paddingButton">
                      <a
                        href="https://github.com/tristonpalacios/Propital"
                        title="Propital GitHub"
                        target="_blank"
                      >
                        <button className="animButton">
                          <span>
                            <FaGithub className="coloredIcon" size={"2em"} />
                          </span>
                        </button>
                      </a>
                    </span>
                  </div>
                  <div className="col">
                    <div className="icons d-flex mb-3 justify-content-between flex-grow-1">
                      {["PYTHON", "A.I.", "FORECASTING"].map((title, index) => (
                        <a
                          key={index}
                          href="#"
                          title={title}
                          className="animSVGLink icon"
                          ref={(el) => (linksRef.current[index] = el)}
                        >
                          <span className="linkText">{title}</span>
                          <svg width="100%" height="9" viewBox="0 0 101 9">
                            <path
                              d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 3.748 6.642-4.141 10.066-4.688 2.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
                              pathLength="1"
                              fill="none"
                              stroke="#000"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 flex-fill tensorBack">
            <img src="/assets/images/loaders/tensorflow.png" className="hide" />
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5 flex-fill">
            <Carousel interval={3000}>
              {NSSPhotos.map((photo, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-image-wrapper">
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">
                <div className="project__header">
                  <span className="projectHighlight">Deep Learning</span>
                  <span> Neural Style Transfer</span>
                </div>
              </h5>
              <ul className="pHighlightList card-text">
                <li>
                  <MdKeyboardDoubleArrowRight />
                  Designed a custom deep learning neural style transfer model
                  using VGG19 so that I could blend content and style images
                  through computer vision.
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  Developed an optimized training loop with TensorFlow's
                  GradientTape, focusing on backpropagation and regularization.
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  Achieved efficient image processing and high-quality results
                  using advanced techniques like total variation loss and data
                  augmentation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
