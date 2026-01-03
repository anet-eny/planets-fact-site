import iconChevron from "../assets/icon-chevron.svg";

export default function Menu({
  isOpen,
  planets,
  selectedPlanet,
  onPlanetChange,
  onClose,
}) {
  const planetColors = {
    mercury: "oklch(0.96 0.02 225)",
    venus: "oklch(0.84 0.09 75)",
    earth: "oklch(0.56 0.23 275)",
    mars: "oklch(0.68 0.19 30)",
    jupiter: "oklch(0.81 0.10 65)",
    saturn: "oklch(0.86 0.11 80)",
    uranus: "oklch(0.88 0.12 180)",
    neptune: "oklch(0.65 0.20 260)",
  };

  const handlePlanetClick = (planetKey) => {
    onPlanetChange(planetKey);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <nav
      className="absolute top-full w-screen bg-black z-50 shadow-2xl shadow-white/10"
      style={{
        marginLeft: "calc(var(--header-padding) * -1)",
      }}
      aria-label="Mobile planet navigation"
    >
      <ul className="flex flex-col">
        {planets.map((planetKey) => (
          <li key={planetKey}>
            <button
              onClick={() => handlePlanetClick(planetKey)}
              aria-current={selectedPlanet === planetKey ? "page" : undefined}
              aria-label={`View ${planetKey} information`}
              className={`w-full flex items-center justify-between px-6 py-5 hover:bg-white/5 cursor-pointer ${
                selectedPlanet === planetKey ? "bg-white/5" : ""
              }`}
            >
              <div className="flex gap-4 items-center">
                <div
                  className="w-4 h-4 rounded-full -translate-y-px"
                  style={{ backgroundColor: planetColors[planetKey] }}
                  aria-hidden="true"
                ></div>
                <span className="text-preset-7 text-white uppercase font-bold">
                  {planetKey}
                </span>
              </div>
              <img src={iconChevron} alt="" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
