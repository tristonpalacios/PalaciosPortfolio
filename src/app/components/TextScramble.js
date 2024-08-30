import React, { useEffect, useRef } from "react";

// TextScramble class handles the text scrambling effect
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }

  // Sets new text and initializes the scrambling process
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();

    return promise;
  }

  // Updates the text content for each frame
  update() {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  // Generates a random character for the scrambling effect
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const TextScrambleComponent = ({ phrases, waitInterval }) => {
  const textRef = useRef(null);
  const fxRef = useRef(null);
  const counterRef = useRef(0);

  // Initialize the TextScramble instance once the component mounts
  useEffect(() => {
    if (textRef.current) {
      fxRef.current = new TextScramble(textRef.current);
    }
  }, []);

  // Function to update the text and schedule the next update
  useEffect(() => {
    if (fxRef.current) {
      const next = () => {
        fxRef.current.setText(phrases[counterRef.current]).then(() => {
          setTimeout(next, waitInterval); // Use the passed waitInterval for delay
        });
        counterRef.current = (counterRef.current + 1) % phrases.length; // Update the counter
      };
      next(); // Start the text scrambling effect
    }
  }, [phrases, waitInterval]); // Only re-run if phrases or waitInterval change

  return <span className="text" ref={textRef}></span>;
};

export default TextScrambleComponent;
