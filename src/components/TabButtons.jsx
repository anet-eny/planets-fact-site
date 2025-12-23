import { planetColors } from "../utils/colors";

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
      className={`flex sm:flex-col justify-evenly border-b border-white/20 sm:border-none ${className}`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`text-preset-11 uppercase text-white opacity-50 px-2 py-4 cursor-pointer border-y-3 border-transparent  transition-all ${
            activeTab === tab.id
              ? "opacity-100 border-b-3 border-b-(--planet-color) sm:border-none"
              : "opacity-50 sm:border sm:border-white"
          }`}
          style={{
            "--planet-color": planetColor,
          }}
        >
          <span className="hidden sm:inline">{tab.number}</span>
          <span className="sm:hidden">{tab.shortLabel}</span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
