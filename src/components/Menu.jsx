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
    <nav className="absolute w-full bg-black z-50">
      <ul className="flex flex-col">
        {planets.map((planetKey) => (
          <li key={planetKey}>
            <button
              onClick={() => handlePlanetClick(planetKey)}
              className={`w-full flex items-center justify-between px-6 py-5 cursor-pointer ${
                selectedPlanet === planetKey ? "bg-white/5" : ""
              }`}
            >
              <div>
                <span
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: planetColors[planetKey] }}
                ></span>
                <span className="text-preset-7 text-white">{planetKey}</span>
              </div>
              <img src={iconChevron} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
