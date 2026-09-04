'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeroBanner() {
  return (
    <div className="hero-banner py-5 bg-gradient">
      <div className="container-fluid">
        <div className="row g-4 align-items-center">
          {/* Left Section - Text */}
          <div className="col-lg-6 text-white">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-3 hero-title">
                আপনার প্রিয় ⚽ দল এর জার্সি পান
              </h1>
              <p className="fs-5 mb-4 hero-subtitle">
                সেরা মানের জার্সি, সাশ্রয়ী মূল্যে। ফুটবল এবং ক্রিকেট উভয়ের জন্য উপলব্ধ।
              </p>
              <button className="btn btn-lg btn-warning fw-bold px-5 py-3 hero-btn">
                🛍️ এখনই কেনাকাটা করুন
              </button>
            </div>
          </div>

          {/* Right Section - Club Jersey Highlight */}
          <div className="col-lg-6">
            <div className="club-jersey-showcase">
              <div className="jersey-card bg-primary rounded-lg p-4 shadow-lg">
                <div className="jersey-image-container text-center mb-4">
                  <img
                    src="/images/club-jersey.png"
                    alt="Club Jersey"
                    className="img-fluid jersey-img"
                    style={{ maxWidth: '300px' }}
                  />
                </div>
                <div className="text-white">
                  <h3 className="fw-bold mb-2">🔥 ক্লাব জার্সি কালেকশন</h3>
                  <p className="mb-3">বিশ্বের সেরা ক্লাবের অফিশিয়াল ডিজাইন</p>
                  <button className="btn btn-light fw-bold w-100 py-2">
                    দেখুন সব ক্লাব জার্সি
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
