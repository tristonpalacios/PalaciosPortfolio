import React from "react";
import TextScrambleComponent from "./TextScramble";
import HeadModel from "./HeadModel";

const Intro = () => {
  // Phrases to display in h4 and h1
  const phrases1 = [
    "Hi, my name is", // English
    "Hola, me llamo", // Spanish
    "Nǐ hǎo, wǒ jiào", // Chinese (Mandarin)
    "नमस्ते, मेरा नाम है", // Hindi
    "Bonjour, je m'appelle", // French
    "Olá, meu nome é", // Portuguese
    "Привет, меня зовут", // Russian
    "こんにちは、私の名前は", // Japanese
    "مرحبا، اسمي", // Arabic
    "Hallo, ich heiße", // German
  ];

  const phrases2 = [
    "Software Developer",
    "Artist",
    "Husband",
    "Dog Dad",
    "Game Developer",
    "Program Manager",
  ];

  return (
    <div className="intro">
      <div className="textHalf">
        <h4 id="shadedImg">
          <TextScrambleComponent phrases={phrases1} waitInterval={2000} />{" "}
        </h4>
        <h1 id="shadedImg">Triston J. Palacios</h1>
        <h2 id="shadedImg">
          <TextScrambleComponent phrases={phrases2} waitInterval={4000} />{" "}
        </h2>
      </div>
      {/* <div className="modelHalf">
        <HeadModel />
      </div> */}
    </div>
  );
};

export default Intro;
