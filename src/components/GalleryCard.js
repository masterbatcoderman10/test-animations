import React from 'react';
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom';

const GalleryCard = ({imgPath, title, path}) => {

    const nav = useNavigate();

    return (

            <div className='gcard' onClick={() => nav(path)}>
                <img className="gcard-img" src={imgPath}></img>
                <span className="gcard-name">{title}</span>
            </div>

    )
}

export default GalleryCard