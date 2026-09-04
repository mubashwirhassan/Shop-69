'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import CategoryTabs from '@/components/CategoryTabs';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <HeroBanner />
      <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <ProductGrid />
      <Footer />
    </div>
  );
}
