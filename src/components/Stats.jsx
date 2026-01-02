import planetsData from "../data/planetsData";
import { PADDING } from "../utils/constants";

export default function Stats({ selectedPlanet, className = "" }) {
  const planet = planetsData[selectedPlanet.toLowerCase()];

  const statsData = [
    { label: "Rotation Time", value: planet.rotation },
    { label: "Revolution Time", value: planet.revolution },
    { label: "Radius", value: planet.radius },
    { label: "Average Temp.", value: planet.temperature },
  ];

  return (
    <section
      className={`grid gril-cols-1 sm:grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 w-full text-white mt-4 md:mt-6 mb-6 sm:mb-0 ${className}`}
      style={{ padding: PADDING }}
    >
      {statsData.map((stat) => (
        <div
          key={stat.label}
          className="flex sm:flex-col justify-between items-center sm:items-start border border-white/20 px-4 py-2"
        >
          <span className="text-preset-12 md:text-preset-10 uppercase opacity-50">
            {stat.label}
          </span>
          <span className="text-preset-5 sm:text-2xl md:text-preset-3 uppercase">
            {stat.value}
          </span>
        </div>
      ))}
    </section>
  );
}
