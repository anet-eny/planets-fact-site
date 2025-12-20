import { planetImages, planetSizes } from "../utils/images";

export default function PlanetImage({ selectedPlanet, activeTab }) {
  const images = planetImages[selectedPlanet.toLowerCase()];
  const sizeClass = planetSizes[selectedPlanet.toLowerCase()];

  const imageMap = {
    overview: images.planet,
    structure: images.internal,
    geology: images.planet,
  };

  const mainImage = imageMap[activeTab] || images.planet;

  return (
    <div className="relative mx-auto p-14">
      <img
        src={mainImage}
        alt={selectedPlanet}
        className={`w-full ${sizeClass}`}
      />
      {activeTab === "geology" && (
        <img
          src={images.geology}
          alt={`${selectedPlanet} surface geology`}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/4"
        />
      )}
    </div>
  );
}
