import React from 'react';

export default function GlitchText({ text }) {
  return (
    <div className="relative inline-block group cursor-default">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all duration-75 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-0.5 transition-all duration-75 delay-75 select-none">
        {text}
      </span>
    </div>
  );
}
