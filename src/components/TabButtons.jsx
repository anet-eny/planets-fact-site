import { planetColors } from "../utils/colors";
import { PADDING } from "../utils/constants";

export default function TabButtons({
  activeTab,
  onTabChange,
  selectedPlanet,
  className = "",
}) {
  const planetColor = planetColors[selectedPlanet.toLowerCase()];

  const tabs = [
    { id: "overview", label: "Overview", shortLabel: "Overview", number: "01" },
    {
      id: "structure",
      label: "Internal Structure",
      shortLabel: "Structure",
      number: "02",
    },
    {
      id: "geology",
      label: "Surface Geology",
      shortLabel: "Surface",
      number: "03",
    },
  ];

  return (
    <div
      className={`flex sm:flex-col justify-evenly sm:gap-2 md:mt-10 border-b border-white/20 sm:border-none ${className}`}
      style={{ paddingInline: PADDING }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex gap-4 text-preset-11 uppercase text-white opacity-50 sm:opacity-100 px-2 sm:px-6 py-4 cursor-pointer border-y-3 border-transparent hover:bg-[oklch(0.8822_0_0/_0.2)] transition-all ${
            activeTab === tab.id
              ? "opacity-100 border-b-3 border-b-(--planet-color) sm:border sm:border-transparent sm:bg-(--planet-color) "
              : "opacity-50 sm:border sm:border-white/10 hover:border-transparent"
          }`}
          style={{
            "--planet-color": planetColor,
          }}
        >
          <span className="hidden sm:inline opacity-50">{tab.number}</span>
          <span className="sm:hidden">{tab.shortLabel}</span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
