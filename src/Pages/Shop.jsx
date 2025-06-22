import React, { useState } from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import ProductCard from '../Components/ProductCard.jsx';
import '../Styles/Shop.css';
// import image17 from '../images/image17.png'
// import image18 from '../images/image18.png'
// import image19 from '../images/image19.png'
// import image20 from '../images/image20.png'
import image21 from '../images/image21.png'
import image22 from '../images/image22.png'


const Shop = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('purple');
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState('image20.png');

  const product = {
    name: "Asgaard Sofa",
    price: 250000,
    description: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    rating: 5,
    reviews: 5,
    sku: "SS001",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
    sizes: ['L', 'XL', 'XS'],
    colors: [
      { name: 'purple', code: '#8a7ca8' },
      { name: 'black', code: '#333' },
      { name: 'gold', code: '#d4af37' }
    ],
    images: ['image 16.png', 'image17.png', 'image18.png', 'image19.png', 'image20.png']
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: 3500000,
      discount: "30",
      image: "/images/image5.jpg"
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: 2500000,
      image: "/images/image6.jpg"
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: 7000000,
      originalPrice: 14000000,
      discount: "50",
      image: "/images/image7.jpg"
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: 500000,
      image: "/images/image8.webp"
    }
  ];

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const formatPrice = (price) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const handleImageError = (e) => {
    e.target.src = '/images/placeholder-product.png';
  };

  return (
    <div className="shop-page">
      <Header />
      
      <div className="breadcrumb">
        <span>Home &gt; Shop &gt; <b>{product.name}</b></span>
      </div>

      <div className="product-container">
        <div className="product-section">
          <div className="product-images">
            <div className="thumbnail-column">
              {product.images.slice(0, 4).map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${mainImage.includes(img) ? 'active' : ''}`}
                  onClick={() => setMainImage(`/images/${img}`)}
                >
                  <img 
                    src={`/images/${img}`} 
                    alt={`Thumbnail ${index + 1}`}
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
            <div className="main-image">
              <img 
                src={mainImage} 
                alt={product.name}
                onError={handleImageError}
              />
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            <div className="product-price">{formatPrice(product.price)}</div>
            
            <div className="rating">
              <div className="stars">
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <span className="rating-count">{product.reviews} Customer Review{product.reviews !== 1 ? 's' : ''}</span>
            </div>

            <p className="product-description">{product.description}</p>

            <div className="size-section">
              <div className="section-title">Size</div>
              <div className="size-options">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="color-section">
              <div className="section-title">Color</div>
              <div className="color-options">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    className={`color-option ${selectedColor === color.name ? 'selected' : ''}`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(-1)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="quantity-input">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleQuantityChange(1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              
              <div className="action-buttons">
                <button className="btn btn-primary">Add To Cart</button>
                <button className="btn btn-secondary">+ Compare</button>
              </div>
            </div>

            <div className="product-meta">
              <div className="meta-row">
                <span className="meta-label">SKU:</span>
                <span className="meta-value">{product.sku}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{product.category}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Tags:</span>
                <span className="meta-value">{product.tags.join(', ')}</span>
              </div>
              
              <div className="social-share">
                <span className="meta-label">Share:</span>
                <a href="#" className="social-link" aria-label="Share on Facebook">f</a>
                <a href="#" className="social-link" aria-label="Share on LinkedIn">in</a>
                <a href="#" className="social-link" aria-label="Share on Twitter">t</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description-section">
        <div className="description-tabs">
          <button 
            className={`description-tab ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`description-tab ${activeTab === 'info' ? 'active' : ''}`}
            onClick={() => setActiveTab('info')}
          >
            Additional Information
          </button>
          <button 
            className={`description-tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews [{product.reviews}]
          </button>
        </div>
        
        {activeTab === 'description' && (
          <div className="tab-content">
            <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.</p>
            
            <div className="description-images">
              <img src={image21} alt="Product detail" onError={handleImageError} />
              <img src={image22} alt="Product detail" onError={handleImageError} />
            </div>
          </div>
        )}
        
        {activeTab === 'info' && (
          <div className="tab-content">
            <div className="info-table">
              <div className="info-row">
                <span className="info-label">Weight</span>
                <span className="info-value">15 kg</span>
              </div>
              <div className="info-row">
                <span className="info-label">Dimensions</span>
                <span className="info-value">200 × 100 × 75 cm</span>
              </div>
              <div className="info-row">
                <span className="info-label">Materials</span>
                <span className="info-value">Wood, Leather</span>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div className="tab-content">
            <div className="review">
              <div className="review-header">
                <span className="review-author">John D.</span>
                <div className="review-rating">★★★★★</div>
              </div>
              <p className="review-text">Excellent product quality and comfortable seating.</p>
            </div>
          </div>
        )}
      </div>

      <h2 className="section-title">Related Products</h2>
      
      <div className="related-products-grid">
        {relatedProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            formatPrice={formatPrice}
          />
        ))}
      </div>
      
      <button className="show-more">Show More</button>
      
      <Footer />
    </div>
  );
};

export default Shop;