import React from "react";
 const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-text">
                <h2><b>Browse The Range</b></h2>
                <p>Select furniture according to the room</p>
            </div>
            <div className="hero-image">
                <div className="card">
                    <img src="https://i.pinimg.com/564x/d4/a1/2e/d4a12e9b61b6758f789163d4ce4ad5d3.jpg"width="350"height="360" />
                    <p>Dining</p>
                </div>
                <div className="card">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/living-room-spring-green-sofa-65d4e5d4dd3d6.png?crop=1.00xw:0.928xh;0,0&resize=980:*"
                    width="350" height="360" />
                    <p>living</p>
                </div>
                <div className="card">
                    <img src="https://i.pinimg.com/736x/d5/3f/ee/d53fee7642015ee97e70cb350d5ae00e.jpg" width="350"
                    height="360" />
                    <p>Bedroom</p>
                </div>
            </div>
        </section>
    );
 };
 export default HeroSection;