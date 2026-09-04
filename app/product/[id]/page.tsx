'use client';

import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Minus, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    id: '1',
    name: 'ম্যাঞ্চেস্টার ইউনাইটেড হোম জার্সি ২০২৪',
    teamName: 'Man United',
    price: 1500,
    rating: 4.8,
    reviews: 245,
    images: [
      '/images/product-1.jpg',
      '/images/product-1-alt.jpg',
      '/images/product-1-back.jpg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'White', 'Black'],
    description: 'অফিশিয়াল ম্যানচেস্টার ইউনাইটেড হোম জার্সি ২০২৪ সিজন। সর্বোচ্চ মানের ফ্যাব্রিক এবং আরামদায়ক ফিটিং।',
    features: [
      '১০০% অথেনটিক ডিজাইন',
      'প্রিমিয়াম ড্রাই-ফিট ফ্যাব্রিক',
      'আরামদায়ক ও টেকসই',
      'দ্রুত ডেলিভারি',
    ],
    stock: 45,
  };

  const reviews = [
    { name: 'রহিম আহমেদ', rating: 5, comment: 'অসাধারণ মানের জার্সি! খুবই সন্তুষ্ট।' },
    { name: 'ফাতেমা রানী', rating: 4, comment: 'ভালো পণ্য, ডেলিভারি একটু দেরি হয়েছিল।' },
  ];

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };
    console.log('Added to cart:', cartItem);
    alert('কার্টে যোগ হয়েছে!');
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark">
      <Navbar />

      <div className="flex-grow-1 py-5">
        <div className="container-fluid">
          <div className="row g-5">
            {/* Left - Images */}
            <div className="col-lg-5">
              <div className="product-image-display mb-4">
                <div className="main-image bg-secondary rounded-lg overflow-hidden mb-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-100"
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                </div>
                <div className="d-flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="img-thumbnail cursor-pointer"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Details */}
            <div className="col-lg-7">
              {/* Title & Rating */}
              <div className="mb-4">
                <h1 className="display-5 fw-bold text-light mb-2">{product.name}</h1>
                <p className="text-warning fs-5 mb-3">{product.teamName}</p>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-warning text-dark px-3 py-2 rounded fw-bold">
                    <Star size={18} className="me-1" />
                    {product.rating} ({product.reviews} রিভিউ)
                  </div>
                  <span className="text-success fw-bold">🔴 স্টকে আছে ({product.stock})</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                <h2 className="text-warning fw-bold display-6">৳ {product.price.toLocaleString()}</h2>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <label className="form-label text-light fw-bold mb-3">🎨 কালার বেছে নিন:</label>
                <div className="d-flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`btn px-4 py-2 fw-bold ${
                        selectedColor === color
                          ? 'btn-warning'
                          : 'btn-outline-light'
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-4">
                <label className="form-label text-light fw-bold mb-3">📏 সাইজ বেছে নিন:</label>
                <div className="d-flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`btn px-4 py-2 fw-bold ${
                        selectedSize === size
                          ? 'btn-warning'
                          : 'btn-outline-light'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <label className="form-label text-light fw-bold mb-3">পরিমাণ:</label>
                <div className="d-flex align-items-center gap-2 w-fit">
                  <button
                    className="btn btn-outline-light"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={18} />
                  </button>
                  <input
                    type="number"
                    className="form-control text-center"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{ width: '80px' }}
                  />
                  <button
                    className="btn btn-outline-light"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="d-flex gap-3 mb-5">
                <button className="btn btn-warning fw-bold py-3 flex-grow-1 fs-5" onClick={addToCart}>
                  <ShoppingCart size={22} className="me-2" />
                  কার্টে যোগ করুন
                </button>
                <button
                  className={`btn py-3 px-4 fw-bold ${
                    isFavorite ? 'btn-danger' : 'btn-outline-light'
                  }`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart size={22} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Features */}
              <div className="bg-secondary-dark p-4 rounded-lg border border-warning">
                <h5 className="text-warning fw-bold mb-3">✨ বৈশিষ্ট্য:</h5>
                <ul className="list-unstyled">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-light mb-2">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="row mt-5">
            <div className="col-12">
              <ul className="nav nav-tabs border-warning" role="tablist">
                <li className="nav-item">
                  <button
                    className={`nav-link fw-bold ${
                      activeTab === 'description'
                        ? 'active text-warning'
                        : 'text-secondary'
                    }`}
                    onClick={() => setActiveTab('description')}
                  >
                    বর্ণনা
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link fw-bold ${
                      activeTab === 'reviews'
                        ? 'active text-warning'
                        : 'text-secondary'
                    }`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    রিভিউ ({product.reviews})
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content bg-secondary-dark p-4 rounded-bottom">
                {activeTab === 'description' && (
                  <div className="text-light">
                    <p>{product.description}</p>
                    <h5 className="text-warning fw-bold mt-4">ডেলিভারি তথ্য:</h5>
                    <p>🚚 ঢাকায় ২৪ ঘন্টায় ডেলিভারি</p>
                    <p>🚚 সারাদেশে ৫-৭ দিনে ডেলিভারি</p>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    {reviews.map((review, idx) => (
                      <div key={idx} className="mb-4 pb-4 border-bottom border-secondary">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h6 className="text-warning fw-bold">{review.name}</h6>
                          <div className="text-warning">
                            {'⭐'.repeat(review.rating)}
                          </div>
                        </div>
                        <p className="text-light">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
