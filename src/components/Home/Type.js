import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web & App Developer",
          "Flutter Developer",
          "Full Stack Developer",
          "Tech Enthusiast!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 10,
      }}
    />
  );
}

export default Type;
