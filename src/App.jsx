import { useState } from "react";
import Header from "./components/Header";
import TabButtons from "./components/TabButtons";
import PlanetImage from "./components/PlanetImage";
import PlanetInfo from "./components/PlanetInfo";
import planetsData from "./data/planetsData";
import Stats from "./components/Stats";
import bgStars from "./assets/background-stars.svg";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState("earth");
  const [activeTab, setActiveTab] = useState("overview");

  const currentPlanet = planetsData[selectedPlanet];
  const currentContent = currentPlanet[activeTab];

  const handlePlanetChange = (planetName) => {
    setSelectedPlanet(planetName);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="flex flex-col bg-black bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bgStars})` }}
    >
      <Header
        planets={Object.keys(planetsData)}
        selectedPlanet={selectedPlanet}
        onPlanetChange={handlePlanetChange}
      />
      <main className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-[1.5fr_1fr] max-w-5xl w-full sm:mt-10 mx-auto">
        <TabButtons
          activeTab={activeTab}
          onTabChange={handleTabChange}
          selectedPlanet={selectedPlanet}
          className="sm:col-start-2 sm:row-start-2"
        />
        <PlanetImage
          selectedPlanet={selectedPlanet}
          activeTab={activeTab}
          className="sm:col-span-2 sm:row-start-1 md:col-span-1 md:row-span-2 md:row-start-1"
        />
        <PlanetInfo
          name={currentPlanet.name}
          content={currentContent.content}
          source={currentContent.source}
          activeTab={activeTab}
          className="sm:col-start-1 sm:row-start-2 md:col-start-2 md:row-start-1 sm:min-h-[250px] md:min-h-[380px]"
        />
      </main>
      <Stats selectedPlanet={selectedPlanet} className="mx-auto max-w-5xl" />
    </div>
  );
}

export default App;
