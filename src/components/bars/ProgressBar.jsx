import React from "react";

export function ProgressBar({width, color}) {
  return (
    <div className="w-full h-2 bg-[#EAEAEA] rounded-md overflow-hidden">
      <div
        className="h-full transition-all"
        style={{ width: `${width}%`, backgroundColor: color }}
      ></div>
    </div>
  );
}
