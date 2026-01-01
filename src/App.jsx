import { useState } from "react";
import Header from "./components/Header";
import TabButtons from "./components/TabButtons";
import PlanetImage from "./components/PlanetImage";
import PlanetInfo from "./components/PlanetInfo";
import planetsData from "./data/planetsData";
import Stats from "./components/Stats";

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
    <div className="bg-black">
      <Header
        planets={Object.keys(planetsData)}
        selectedPlanet={selectedPlanet}
        onPlanetChange={handlePlanetChange}
      />
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-[1fr_350px] max-w-5xl mt-10 mx-auto">
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
          className="sm:col-start-1 sm:row-start-2 md:col-start-2 md:row-start-1 md:min-h-[380px]"
        />
        <Stats selectedPlanet={selectedPlanet} />
      </div>
    </div>
  );
}

export default App;
