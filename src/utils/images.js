// Planet images
import planetMercury from "../assets/planet-mercury.svg";
import planetVenus from "../assets/planet-venus.svg";
import planetEarth from "../assets/planet-earth.svg";
import planetMars from "../assets/planet-mars.svg";
import planetJupiter from "../assets/planet-jupiter.svg";
import planetSaturn from "../assets/planet-saturn.svg";
import planetUranus from "../assets/planet-uranus.svg";
import planetNeptune from "../assets/planet-neptune.svg";

// Internal structure images
import planetMercuryInternal from "../assets/planet-mercury-internal.svg";
import planetVenusInternal from "../assets/planet-venus-internal.svg";
import planetEarthInternal from "../assets/planet-earth-internal.svg";
import planetMarsInternal from "../assets/planet-mars-internal.svg";
import planetJupiterInternal from "../assets/planet-jupiter-internal.svg";
import planetSaturnInternal from "../assets/planet-saturn-internal.svg";
import planetUranusInternal from "../assets/planet-uranus-internal.svg";
import planetNeptuneInternal from "../assets/planet-neptune-internal.svg";

// Geology images
import geologyMercury from "../assets/geology-mercury.png";
import geologyVenus from "../assets/geology-venus.png";
import geologyEarth from "../assets/geology-earth.png";
import geologyMars from "../assets/geology-mars.png";
import geologyJupiter from "../assets/geology-jupiter.png";
import geologySaturn from "../assets/geology-saturn.png";
import geologyUranus from "../assets/geology-uranus.png";
import geologyNeptune from "../assets/geology-neptune.png";

export const planetImages = {
  mercury: {
    planet: planetMercury,
    internal: planetMercuryInternal,
    geology: geologyMercury,
  },
  venus: {
    planet: planetVenus,
    internal: planetVenusInternal,
    geology: geologyVenus,
  },
  earth: {
    planet: planetEarth,
    internal: planetEarthInternal,
    geology: geologyEarth,
  },
  mars: {
    planet: planetMars,
    internal: planetMarsInternal,
    geology: geologyMars,
  },
  jupiter: {
    planet: planetJupiter,
    internal: planetJupiterInternal,
    geology: geologyJupiter,
  },
  saturn: {
    planet: planetSaturn,
    internal: planetSaturnInternal,
    geology: geologySaturn,
  },
  uranus: {
    planet: planetUranus,
    internal: planetUranusInternal,
    geology: geologyUranus,
  },
  neptune: {
    planet: planetNeptune,
    internal: planetNeptuneInternal,
    geology: geologyNeptune,
  },
};

export const planetSizes = {
  mercury: "max-w-[clamp(111px,_30vw,_290px)]",
  venus: "max-w-[clamp(154px,_40vw,_400px)]",
  earth: "max-w-[clamp(173px,_45vw,_450px)]",
  mars: "max-w-[clamp(129px,_35vw,_336px)]",
  jupiter: "max-w-[clamp(224px,_58vw,_582px)]",
  saturn: "max-w-[clamp(256px,_66vw,_666px)]",
  uranus: "max-w-[clamp(176px,_45vw,_458px)]",
  neptune: "max-w-[clamp(173px,_45vw,_450px)]",
};
