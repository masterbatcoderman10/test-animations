import React from 'react'
import Letter from './Letter';
import { useState, useEffect } from 'react';
import {useAnimation} from 'framer-motion'

const AlphabetRumble = () => {
    const controls = useAnimation();
    const [letters, setLetters] = useState(["c", "a", "t", "a", "s", "t", "o", "p", "h", "e"])

  useEffect(() => {
    controls.set("initial")
    controls.start("stageOne")
    .then(setTimeout(() => controls.stop(), 3000))
    .then(setTimeout(() => controls.start("final"), 3000))
  })

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  return (
    <div className="App">
      <div className="box">
        {letters.map(letter => {
          const randX = getRandomInt(-427, 427);
          const randY = getRandomInt(215, 400);
          const angleStart = getRandomInt(-360, 360)
          const angleMod = getRandomInt(8, 10)
          let angleEnd;
          const probability = Math.random()

          probability > 0.5 ? (angleEnd = angleStart + angleMod) : angleEnd = angleStart - angleMod

          return <Letter 
          alphabet={letter} 
          controls={controls} 
          randX={randX} 
          randY={randY}
          angleStart={angleStart}
          angleEnd={angleEnd}
          />
        })}
        {/* <Letter alphabet={"C"} controls={controls}></Letter> */}
      </div>
    </div>
  );
}

export default AlphabetRumble
