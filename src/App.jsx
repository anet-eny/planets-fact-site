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
      <div className="flex flex-col">
        <TabButtons
          activeTab={activeTab}
          onTabChange={handleTabChange}
          selectedPlanet={selectedPlanet}
        />
        <PlanetImage selectedPlanet={selectedPlanet} activeTab={activeTab} />
        <PlanetInfo
          name={currentPlanet.name}
          content={currentContent.content}
          source={currentContent.source}
        />
      </div>
    </div>
  );
}

export default App;
