import React from 'react';
// CORRECT IMPORTS (matching uppercase names)
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import ProductCard from '../Components/ProductCard.jsx';
import '../Styles/Home.css';
import image13 from '../images/image13.png'


const products = [
  {
    image: "/images/image5.jpg",
    name: "Syltherine",
    info: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "30",
    className: "image5"
  },
  {
    image: "/images/image6.jpg",
    name: "Leviosa",
    info: "Stylish cafe chair",
    price: "Rp 2.500.000",
    className: "image6"
  },
   {
    image: "/images/image7.jpg",
    name: "Lolito",
    info: "Luxury big sofa",
    originalPrice: "Rp 14.000.000",
    price: "Rp 7.000.000",
    className: "image7"
  },
   {
    image: "/images/image8.webp",
    name: "Respira",
    info: "Outdoor bar table and stool",
    price: "Rp 500.000",
    className: "image8"
  },
   {
    image: "/images/image9.jpg",
    name: "Grifo",
    info: "Night lamp",
    price: "Rp 1.500.000",
    className: "image9"
  },
   {
    image: "/images/image10.jpg",
    name: "Muggo",
    info: "Small lamp",
    price: "Rp 150.000",
    className: "image10"
  },
   {
    image: "/images/image 11.jpeg",
    name: "Pingky",
    info: "Cute bed set",
    price: "Rp 2.500.000",
    discount: "-50",
    originalPrice: "Rp 7.000.000",
    className: "image11"
  },
   {
    image: "/images/image12.webp",
    name: "Potty",
    info: "Minamilist flower pot",
    price: "Rp 2.500.000",
    className: "image12"
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="hero">
        <img src="/images/image1.png" alt="Modern furniture" className="hero-image" />
      </section>
      
      <div className="content">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="category-images">
          <div className="category">
            <img src="/images/image2.png" alt="Dining" />
            <h5>Dining</h5>
          </div>
          <div className="category">
            <img src="/images/image3.png" alt="Living Room" />
            <h5>Living</h5>
          </div>
          <div className="category">
            <img src="/images/image4.png" alt="Bedroom" />
            <h5>Bedroom</h5>
          </div>
        </div>

        <h2 className="products-title">Our Products</h2>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        
        <div className="inspiration-section">
          <div className="inspiration-content">
            <h1>50+ Beautiful rooms inspiration</h1>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button className="explore-btn">Explore more</button>
          </div>
          <div className="inspiration-images">
            <img src={image13} alt="Room design" className="inspiration-img1" />
            <img src="/images/image14.png" alt="Room design" className="inspiration-img2" />
          </div>
        </div>
        
        <div className="social-section">
          <p>Share your setup with</p>
          <h2>#FuniroFurniture</h2>
          <img src="/images/image15.png" alt="Social gallery" className="social-gallery" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;