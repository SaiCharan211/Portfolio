import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter" style={{color:"black",background:"grey",width:"50%"}} >
      <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed:50,
      }}
    />
    </div>
  );
}

export default Type;
