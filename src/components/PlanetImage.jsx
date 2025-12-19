import { planetImages } from "../utils/images";

export default function PlanetImage({ selectedPlanet, activeTab }) {
  const images = planetImages[selectedPlanet.toLowerCase()];

  const imageMap = {
    overview: images.planet,
    structure: images.internal,
    geology: images.planet,
  };

  const mainImage = imageMap[activeTab] || images.planet;

  return (
    <div className="mx-auto p-14">
      <img src={mainImage} alt={selectedPlanet} className="w-full max-w-xs" />
      {activeTab === "geology" && (
        <img
          src={images.geology}
          alt={`${selectedPlanet} surface geology`}
          className="absolute bottom-8 w-1/3"
        />
      )}
    </div>
  );
}
