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
      className="flex flex-col sm:flex-row gap-1.5 text-white py-6"
      style={{ paddingInline: PADDING }}
    >
      {statsData.map((stat) => (
        <div
          key={stat.label}
          className="flex justify-between items-center border border-white/50 px-4 py-2"
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
