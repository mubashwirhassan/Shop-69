'use client';

import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'ম্যাঞ্চেস্টার ইউনাইটেড হোম জার্সি',
      price: 1500,
      quantity: 2,
      size: 'M',
      color: 'Red',
      image: '/images/product-1.jpg',
    },
    {
      id: '2',
      name: 'লিভারপুল ফুটবল জার্সি',
      price: 1400,
      quantity: 1,
      size: 'L',
      color: 'Red',
      image: '/images/product-2.jpg',
    },
  ]);

  const updateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 100;
  const total = subtotal + shipping;

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark">
      <Navbar />

      <div className="flex-grow-1 py-5">
        <div className="container-fluid">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <h2 className="text-light mb-4">🛒 আপনার কার্ট খালি</h2>
              <p className="text-secondary mb-4">কোনো পণ্য যোগ করেননি এখনো</p>
              <a href="/" className="btn btn-warning fw-bold px-5 py-2">
                কেনাকাটা চালিয়ে যান
              </a>
            </div>
          ) : (
            <div className="row g-5">
              {/* Cart Items */}
              <div className="col-lg-8">
                <h2 className="text-light fw-bold mb-4 border-left border-warning ps-3">
                  আপনার কার্ট ({cartItems.length} পণ্য)
                </h2>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="card bg-secondary-dark border-warning mb-3 shadow-sm"
                  >
                    <div className="row g-0">
                      {/* Image */}
                      <div className="col-md-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded-start"
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Details */}
                      <div className="col-md-9">
                        <div className="card-body">
                          <div className="row">
                            {/* Left */}
                            <div className="col-md-7">
                              <h5 className="card-title text-light fw-bold mb-2">
                                {item.name}
                              </h5>
                              <p className="text-secondary small mb-2">
                                🎨 {item.color} | 📏 {item.size}
                              </p>
                              <h5 className="text-warning fw-bold">৳ {item.price}</h5>
                            </div>

                            {/* Right - Quantity & Actions */}
                            <div className="col-md-5 d-flex flex-column justify-content-between">
                              {/* Quantity */}
                              <div className="d-flex align-items-center gap-2 mb-3">
                                <button
                                  className="btn btn-sm btn-outline-light"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus size={16} />
                                </button>
                                <input
                                  type="number"
                                  className="form-control form-control-sm text-center"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    updateQuantity(item.id, parseInt(e.target.value) || 1)
                                  }
                                  style={{ width: '60px' }}
                                />
                                <button
                                  className="btn btn-sm btn-outline-light"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus size={16} />
                                </button>
                              </div>

                              {/* Total & Delete */}
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="text-warning fw-bold mb-0">
                                  মোট: ৳ {(item.price * item.quantity).toLocaleString()}
                                </p>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="col-lg-4">
                <div className="card bg-secondary-dark border-warning shadow-lg sticky-top" style={{ top: '20px' }}>
                  <div className="card-body p-4">
                    <h5 className="text-warning fw-bold mb-4">📋 অর্ডার সারাংশ</h5>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between text-light mb-2">
                        <span>পণ্য মূল্য:</span>
                        <span>৳ {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="d-flex justify-content-between text-light mb-3">
                        <span>ডেলিভারি চার্জ:</span>
                        <span className={shipping === 0 ? 'text-success' : ''}>
                          {shipping === 0 ? 'ফ্রি' : `৳ ${shipping}`}
                        </span>
                      </div>
                      <hr className="border-secondary" />
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-warning fw-bold">মোট:</h5>
                      <h5 className="text-warning fw-bold">৳ {total.toLocaleString()}</h5>
                    </div>

                    <button className="btn btn-warning fw-bold w-100 py-2 mb-2">
                      🛍️ চেকআউট করুন
                    </button>
                    <a href="/" className="btn btn-outline-light fw-bold w-100 py-2">
                      কেনাকাটা চালিয়ে যান
                    </a>

                    {subtotal < 5000 && (
                      <div className="alert alert-info mt-3 small">
                        ✨ ৳ {5000 - subtotal} আরও কিনুন এবং ফ্রি ডেলিভারি পান!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
