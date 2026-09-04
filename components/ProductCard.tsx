'use client';

import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
  id: string;
  name: string;
  teamName: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [showSizeMenu, setShowSizeMenu] = useState(false);

  return (
    <div className="col-sm-6 col-lg-3 mb-4">
      <div className="card product-card h-100 bg-dark border-secondary shadow-sm hover-shadow">
        {/* Image Container */}
        <div className="position-relative product-image-container bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="card-img-top product-img"
            style={{ height: '280px', objectFit: 'cover' }}
          />

          {/* Favorite Button */}
          <button
            className={`btn position-absolute top-2 end-2 rounded-circle ${
              isFavorite ? 'btn-danger' : 'btn-outline-light'
            }`}
            onClick={() => setIsFavorite(!isFavorite)}
            style={{ width: '40px', height: '40px' }}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>

          {/* Rating Badge */}
          <div className="position-absolute bottom-2 start-2 bg-warning text-dark px-2 py-1 rounded fw-bold small">
            <Star size={14} className="inline-block me-1" />
            {product.rating} ({product.reviews})
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column text-light">
          <h6 className="card-title fw-bold mb-1 text-truncate">{product.name}</h6>
          <p className="card-subtitle text-warning mb-2 small">{product.teamName}</p>

          {/* Price */}
          <h5 className="mb-3 fw-bold text-warning">
            ৳ {product.price.toLocaleString()}
          </h5>

          {/* Size Selector */}
          <div className="mb-3">
            <label className="form-label small mb-2 text-secondary">সাইজ নির্বাচন করুন</label>
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-light dropdown-toggle w-100"
                type="button"
                onClick={() => setShowSizeMenu(!showSizeMenu)}
              >
                {selectedSize}
              </button>
              {showSizeMenu && (
                <div className="dropdown-menu show w-100">
                  {product.sizes.map((size) => (
                    <a
                      key={size}
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedSize(size);
                        setShowSizeMenu(false);
                      }}
                    >
                      {size}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-warning fw-bold mt-auto py-2">
            <ShoppingCart size={18} className="me-2" />
            কার্টে যোগ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
