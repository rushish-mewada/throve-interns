import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetail = () => {
  return (
    <>
      <Navbar />

      <div className="page-section">
        <a href="/">Home &gt;</a>
        <a href="#">Shop &gt;</a>
        <h4>Asgaard Sofa</h4>
      </div>

      <main className="product-page">
        <div className="thumbnail-page">
          <div className="sofa-image">
            <img src="https://thot-media.thehouseofthings.com/media/catalog/product/cache/1148ab7f72254d0ec9e2adc78dc49797/2/_/2_45_1.jpg" width="100" height="100" alt="thumb1" />
          </div>
          <div className="sofa-image">
            <img src="https://thot-media.thehouseofthings.com/media/catalog/product/cache/1148ab7f72254d0ec9e2adc78dc49797/g/r/grey_sofa_1_1800x1200_updated-with-legs2_1.jpg" width="100" height="100" alt="thumb2" />
          </div>
          <div className="sofa-image">
            <img src="https://thot-media.thehouseofthings.com/media/catalog/product/cache/1148ab7f72254d0ec9e2adc78dc49797/e/l/eloise_curved_sofa_1800x1200_2.jpg" width="100" height="100" alt="thumb3" />
          </div>
          <div className="sofa-image">
            <img src="https://thot-media.thehouseofthings.com/media/catalog/product/cache/1148ab7f72254d0ec9e2adc78dc49797/s/u/sun-1025-1044-sparks_sofa_three_seater_stitched-1800x12001_1_1.jpg" width="100" height="100" alt="thumb4" />
          </div>
        </div>

        <div className="selected-image">
          <img src="https://ouchcart.com/cdn/shop/products/DSC_4563_2048x_2048x_bf5b6706-5c51-4360-940f-020905873bf7.jpg?v=1721371159" width="400" height="450" alt="Asgaard Sofa" />
        </div>

        <div className="detalis">
          <h1>Asgaard Sofa</h1>
          <span>Rs 250,000.0</span>
          <span> ⭐⭐⭐⭐⭐ | 5 Customer reviews</span>
          <p>
            Setting the bar as one of the loudest speakers in its class, the album is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          <label>Size</label>
          <div className="option">
            <button>L</button>
            <button>XL</button>
            <button>XS</button>
          </div>

          <br /><br /><br />
          <label>Colour</label>
          <div className="color-options">
            <span>🟣</span>
            <span>🟡</span>
            <span>⚫</span>
          </div>

          <br /><br />
          <div className="action">
            <button>- 1 +</button>
            <button>Add to Cart</button>
            <button>+ Compare</button>
          </div>

          <hr />
          <div className="text">
            <p>SKU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: SS001</p>
            <p>Category&nbsp;: Sofas</p>
            <p>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Sofa, Chair, Home, Shop</p>
            <p>
              Share&nbsp;&nbsp;&nbsp;:
              <img src="https://static.vecteezy.com/system/resources/thumbnails/042/127/218/small_2x/round-circle-blue-facebook-logo-with-long-shadow-on-a-transparent-background-free-png.png" width="20" height="20" alt="fb" />
              <img src="https://blog.waalaxy.com/wp-content/uploads/2021/01/25.jpg" width="20" height="20" alt="insta" />
              <img src="https://i.pinimg.com/474x/7d/44/d5/7d44d55ead7dda48bd95632d92fb259d.jpg" width="20" height="20" alt="twitter" />
            </p>
          </div>
        </div>
      </main>

      <div className="box-info">
        <div className="tabs">
          <span>Description</span>
          <span>Additional Information</span>
          <span>Reviews [5]</span>
        </div>

        <div className="desciption">
          <p>
            Encouraging time at your new comfort spot. Feel the lush texture and sound of relaxation through cloudlike design and upholstery. It is very soft and comfortable. Elevate your living space with this stylish and comfortable 3-seater sofa. Crafted with premium fabric and durable wooden framing, it combines elegance and everyday functionality.
          </p>
          <p>
            Its unique approach, the lush and bright design blends art and nature into your personal space. Designed to complement a variety of unique style arrangements.
          </p>
        </div>

        <div className="box-image">
          <img src="https://www.thesofabeds.com/cdn/shop/files/1_53a603a0-e62b-4630-868c-e52c1fa8d6ef.jpg?v=1717752760" width="800" height="800" alt="preview1" />
          <img src="https://images.woodenstreet.de/image/cache/data%2Fsofa-beds%2Fpluto-fabric-convertible-3-seater-sofa-bed-velvet-chestnut-brown%2FChestnut-brown%2Fnew-logo%2F1-750x650.jpg" width="800" height="800" alt="preview2" />
        </div>
      </div>

      <div className="other-product">
        <div className="name">
          <h1>Related Products</h1>
        </div>

        <div className="other-image">
          <img src="/other1.png" alt="other1" />
          <img src="/other2.png" alt="other2" />
          <img src="/other3.png" alt="other3" />
          <img src="/other4.png" alt="other4" />
        </div>

        <div className="other-button">
          <button>Show More</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
