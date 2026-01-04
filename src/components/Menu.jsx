import { useEffect, useRef } from "react";
import { planetMenuColors } from "../utils/colors";
import iconChevron from "../assets/icon-chevron.svg";

export default function Menu({
  isOpen,
  planets,
  selectedPlanet,
  onPlanetChange,
  onClose,
}) {
  const firstButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen && firstButtonRef.current) {
      firstButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

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
      id="mobile-menu"
      aria-label="Mobile planet navigation"
    >
      <ul className="flex flex-col">
        {planets.map((planetKey, index) => (
          <li key={planetKey}>
            <button
              ref={index === 0 ? firstButtonRef : null}
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
                  style={{ backgroundColor: planetMenuColors[planetKey] }}
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
