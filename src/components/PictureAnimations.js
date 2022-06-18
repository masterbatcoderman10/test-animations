import React from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useState, useEffect} from 'react';
import CardAniOne from './CardAniOne';

const PictureAnimations = () => {

    return (
        <div className='pic-grid'>
            <CardAniOne />
        </div>
    )

}

export default PictureAnimations;