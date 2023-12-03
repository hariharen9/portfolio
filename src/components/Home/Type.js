import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Cloud Application Developer',
          'Web & App Developer',
          'Full Stack Developer',
          'A Tech Enthusiast!',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 10,
      }}
    />
  )
}

export default Type;
