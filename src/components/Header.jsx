import { useEffect, useState } from "react";
import iconMenu from "../assets/icon-hamburger.svg";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Menu from "./Menu";

const HEADER_PADDING = "1rem";

export default function Header({ planets, selectedPlanet, onPlanetChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 40rem)");

  useEffect(() => {
    if (isMenuOpen && !isSmallScreen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, isSmallScreen]);
  console.log(isMenuOpen);

  return (
    <header
      className="relative flex justify-between sm:flex-col sm:items-center sm:gap-8 bg-black text-white"
      style={{
        "--header-padding": HEADER_PADDING,
        padding: HEADER_PADDING,
      }}
    >
      <h1 className="text-preset-4 uppercase">the planets</h1>

      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="sm:hidden cursor-pointer"
      >
        <img src={iconMenu} alt="Open menu" />
      </button>

      <nav className="hidden sm:flex gap-6">
        {planets.map((planetKey) => (
          <button
            key={planetKey}
            onClick={() => onPlanetChange(planetKey)}
            className="text-preset-10 uppercase cursor-pointer"
          >
            {planetKey}
          </button>
        ))}
      </nav>
      <Menu
        isOpen={isMenuOpen}
        planets={planets}
        selectedPlanet={selectedPlanet}
        onPlanetChange={onPlanetChange}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
