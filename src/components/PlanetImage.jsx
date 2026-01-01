import { planetImages, planetSizes } from "../utils/images";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function PlanetImage({
  selectedPlanet,
  activeTab,
  className = "",
}) {
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  const images = planetImages[selectedPlanet.toLowerCase()];
  const sizeClass = planetSizes[selectedPlanet.toLowerCase()];

  const imageMap = {
    overview: images.planet,
    structure: images.internal,
    geology: images.planet,
  };

  const mainImage = imageMap[activeTab] || images.planet;

  return (
    <div className={`relative mx-auto p-14 ${className}`}>
      <img
        src={mainImage}
        alt={selectedPlanet}
        className={`w-full ${sizeClass} mx-auto`}
      />
      {activeTab === "geology" && (
        <img
          src={images.geology}
          alt={`${selectedPlanet} surface geology`}
          className={`absolute  left-1/2 -translate-x-1/2 w-1/4 ${
            isDesktop &&
            (selectedPlanet === "mercury" || selectedPlanet === "mars")
              ? "bottom-40"
              : "bottom-8"
          }`}
        />
      )}
    </div>
  );
}
