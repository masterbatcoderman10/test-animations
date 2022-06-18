import React from 'react';
import GalleryCard from './GalleryCard';


const Home = () => {


    return (
        <div className="grid">
        <nav className="navbar">
            <div>
                <h1>Animation Gallery</h1>
            </div>
        </nav>
        <main className='hero'>
            <p>This website serves as a gallery for various animations.</p>
        </main>
        <section className='gallery'>
            <GalleryCard imgPath={"./letterRumble.png"} title={"Letter Rumble Animation"} path={"/alphabet-rumble"}/>
        </section>
        </div>
    )
}

export default Home;