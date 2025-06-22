import React from 'react';
import DiscountBadge from './DiscountBadge.jsx';

const ProductCard = ({ product }) => {
  return (
    <div className={`product-card ${product.className || ''}`}>
      <div className="image-container">
        <img src={product.image} alt={product.name} />
        {product.discount && <DiscountBadge value={product.discount} isNew={product.isNew} />}
      </div>
      <div className="box">
        <div className="product-name">{product.name}</div>
        <div className="product-info">{product.info}</div>
        <div className="price-container">
          <span className="price">{product.price}</span>
          {product.originalPrice && <span className="original-price"><sub>{product.originalPrice}</sub></span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;