import React from "react";

function Ellipse({ width, height, top, left, color }) {
  return (
    <div>
      <p
        className={`border-2 border-solid rounded-full border-[${color}] w-[${width}] h-[${height}] absolute top-[${top}] left-[${left}]`}></p>
    </div>
  );
}

export default Ellipse;
