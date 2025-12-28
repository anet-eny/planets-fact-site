import { useEffect, useState } from "react";
import { PADDING } from "../utils/constants";
import iconSource from "../assets/icon-source.svg";

export default function PlanetInfo({
  name,
  content,
  source,
  activeTab,
  className = "",
}) {
  const [displayContent, setDisplayContent] = useState(content);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Fade out
    setIsAnimating(false);

    // Změň content a fade in
    const timer = setTimeout(() => {
      setDisplayContent(content);
      setIsAnimating(true);
    }, 300); // half of animation duration

    return () => clearTimeout(timer);
  }, [content, activeTab]);

  return (
    <div
      className={`flex flex-col items-center sm:items-start text-center sm:text-left ${className}`}
      style={{ paddingInline: PADDING }}
    >
      <h1 className="text-white text-preset-3 sm:text-preset-2 md:text-preset-1 uppercase mb-4">
        {name}
      </h1>
      <p
        className={`
          text-preset-11 md:text-preset-8 font-normal text-white mb-6 leading-relaxed
          transition-all duration-300 ease-in-out
          ${isAnimating ? "opacity-100" : "opacity-0"}
        `}
      >
        {displayContent}
      </p>
      <div className="text-preset-9 md:text-preset-8 tracking-normal">
        <span className=" font-normal text-white/50">Source : </span>
        <a
          href={source}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white/50 underline"
        >
          Wikipedia
          <img src={iconSource} alt="" className="inline ml-1" />
        </a>
      </div>
    </div>
  );
}
