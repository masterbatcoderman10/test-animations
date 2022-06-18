import React from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useState, useEffect} from 'react';

const imgVariant = {
    base: {
        scale: 1
    },
    hover: {
        scale: 1.2,
        transition: {
            type: "spring",
            duration: 0.5
        }
    }
}

const CardAniOne = () => {

    return (
        <div className="pic-card-one">
            <motion.img variants={imgVariant} whileHover="hover" src="./beauty2.jpg"/>
        </div>
    )
}

export default CardAniOne;

