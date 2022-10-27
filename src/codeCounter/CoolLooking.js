import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links"; 

function CoolLooking() {
  const particlesInit = async (main) => {
 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadLinksPreset(main);
  };
 
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
                preset: "links",
                fullScreen: {
                    enable: true,
                    zIndex: 0,

                },
                background: {
                    color: '#fff',
                  },  
                  particles: {
                    number: {
                      value: 200,
                      limit: 300,
                      density: {
                        enable: true,
                        value_area: 800
                      }
                    },
                    color: {
                      value: "#c4c4c4"
                    },
                    shape: {
                      type: "circle",
                      stroke: {
                        width: 0,
                        color: "#c4c4c4"
                      },
                      polygon: {
                        nb_sides: 5
                      }
                    },
                    opacity: {
                      value: 0.5,
                      random: true,
                      anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.5,
                        sync: false
                      }
                    },
                    line_linked: {
                      enable: true,
                      distance: 100,
                      color: "#c4c4c4",
                      opacity: 1,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 1,
                      direction: "none",
                      random: false,
                      straight: false,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
              }}
      />


  );
}
 
export default CoolLooking;
