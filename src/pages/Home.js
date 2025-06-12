import React  from "react";
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import RoomInspiration from '../components/RoomInspiration';
import FurniroFurnitureBanner from "../components/FurniroFurnitureBanner";
import Footer from '../components/Footer';


const Home = () => {
    return(
        <>
        <Navbar />
        <InfoSection />
        <HeroSection />
        <ProductGrid />
        <RoomInspiration />
        <FurniroFurnitureBanner />
        <Footer />
        </>
    );
};
export default Home;

