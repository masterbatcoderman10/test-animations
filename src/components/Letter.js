import React from "react";
import { motion, useAnimation } from "framer-motion";

const Letter = ({alphabet, controls, randX, angleStart, angleEnd, randY}) => {

    const letterVariantsOne = {
        initial : {
          y: randY,
          x: randX
        },
        stageOne : {
          rotate: [angleStart, angleEnd],
          x: [randX, randX+2],
          transition: {
              x: {
                yoyo: Infinity,
                duration: 0.01
              },
              rotate: {
                  type: "spring",
                  yoyo: Infinity,
                  duration: 0.08
              }
            }
        },
        final : {
          y:0,
          x:0,
          rotate: 0,
          transition : {
            duration: 1
          }
        }
      }


    return (
        <motion.div className="letter" variants={letterVariantsOne} animate={controls}>{alphabet}</motion.div>
    )
}

export default Letter