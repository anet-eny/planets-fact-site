import { useState } from "react";
import Header from "./components/Header";
import TabButtons from "./components/TabButtons";
import planetsData from "./data/planetsData";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState("earth");
  const [activeTab, setActiveTab] = useState("overview");

  const currentPlanet = planetsData[selectedPlanet];
  const currentContent = currentPlanet[activeTab];

  const handlePlanetChange = (planetName) => {
    setSelectedPlanet(planetName);
    setActiveTab("overview");
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
      <TabButtons activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}

export default App;
