'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Heart } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <div className="logo-circle" style={{ width: '45px', height: '45px' }}>
            <img src="/logo.png" alt="Shop 69" className="img-fluid" />
          </div>
          <span className="fw-bold fs-5">Shop 69</span>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/national-jerseys" className="nav-link">
                🇧🇩 জাতীয় জার্সি
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/club-jerseys" className="nav-link">
                ⚽ ক্লাব জার্সি
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/custom-jerseys" className="nav-link">
                ✨ কাস্টম জার্সি
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/track-order" className="nav-link">
                📦 অর্ডার ট্র্যাক করুন
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/favorites" className="nav-link position-relative">
                <Heart size={20} />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cart" className="nav-link position-relative">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link href={isLoggedIn ? "/profile" : "/login"} className="nav-link">
                <User size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
