import planetsJson from "./data.json";

const planetsData = planetsJson.reduce((acc, planet) => {
  const key = planet.name.toLowerCase();
  acc[key] = planet;
  return acc;
}, {});

export default planetsData;
