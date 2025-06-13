import React from "react";

const products = [
  {
    name: "Syltherine",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    tag: "-30%",
    image: "p8.jpg",
  },
  {
    name: "Leviosa",
    desc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    tag: null,
    image: "p1.jpg",
    hover: true,
  },
  {
    name: "Lolito",
    desc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    tag: "-50%",
    image: "p2.jpg",
  },
  {
    name: "Respira",
    desc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    tag: "New",
    image: "p3.jpg",
  },
  {
    name: "Grifo",
    desc: "Night lamp",
    price: "Rp 1.500.000",
    tag: null,
    image: "p4.jpg",
  },
  {
    name: "Muggo",
    desc: "Small mug",
    price: "Rp 150.000",
    tag: "New",
    image: "p5.jpg",
  },
  {
    name: "Pingky",
    desc: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    tag: "-50%",
    image: "p6.jpg",
  },
  {
    name: "Potty",
    desc: "Minimalist flower pot",
    price: "Rp 500.000",
    tag: "New",
    image: "p7.jpg",
  },
];

const Products = () => {
  return (
    <section className="products">
      <h2 className="products-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <div className="image-wrapper">
              <img
                src={require(`../images/${product.image}`)}
                alt={product.name}
              />
              {product.tag && (
                <span className={`tag ${product.tag === "New" ? "new" : "sale"}`}>
                  {product.tag}
                </span>
              )}
              {product.hover && (
                <div className="hover-overlay">
                  <button>Add to cart</button>
                  <div className="hover-actions">
                    <span>Share</span>
                    <span>Compare</span>
                    <span>Like</span>
                  </div>
                </div>
              )}
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.desc}</p>
              <p className="price">
                <strong>{product.price}</strong>{" "}
                {product.oldPrice && <span className="old">{product.oldPrice}</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="show-more">Show More</button>
    </section>
  );
};

export default Products;
