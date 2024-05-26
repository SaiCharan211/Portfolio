import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{color:"black"}}>
      <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
