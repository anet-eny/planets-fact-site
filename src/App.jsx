import { useState } from "react";
import Header from "./components/Header";
import TabButtons from "./components/TabButtons";
import PlanetImage from "./components/PlanetImage";
import PlanetInfo from "./components/PlanetInfo";
import planetsData from "./data/planetsData";

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
      <div className="flex flex-col sm:flex-row sm:flex-wrap">
        <TabButtons
          activeTab={activeTab}
          onTabChange={handleTabChange}
          selectedPlanet={selectedPlanet}
          className="sm:order-3 sm:w-1/2"
        />
        <PlanetImage
          selectedPlanet={selectedPlanet}
          activeTab={activeTab}
          className="sm:order-1 sm:w-full"
        />
        <PlanetInfo
          name={currentPlanet.name}
          content={currentContent.content}
          source={currentContent.source}
          className="sm:order-2 sm:w-1/2"
        />
      </div>
    </div>
  );
}

export default App;
