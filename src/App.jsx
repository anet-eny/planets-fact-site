import { useState } from "react";
import Header from "./components/Header";
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
    <>
      <Header
        planets={Object.keys(planetsData)}
        selectedPlanet={selectedPlanet}
        onPlanetChange={handlePlanetChange}
      />
    </>
  );
}

export default App;
