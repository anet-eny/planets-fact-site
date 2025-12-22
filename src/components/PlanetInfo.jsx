import { PADDING } from "../utils/constants";
import iconSource from "../assets/icon-source.svg";

export default function PlanetInfo({ name, content, source }) {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ paddingInline: PADDING }}
    >
      <h1 className="text-white text-preset-3 sm:text-preset-2 md:text-preset-1 uppercase mb-4">
        {name}
      </h1>
      <p className="text-preset-11 md:text-preset-8 font-normal text-white mb-6">
        {content}
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
