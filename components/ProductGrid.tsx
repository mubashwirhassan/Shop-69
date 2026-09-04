'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const sampleProducts = [
  {
    id: '1',
    name: 'ম্যাঞ্চেস্টার ইউনাইটেড হোম জার্সি',
    teamName: 'Man United',
    price: 1500,
    image: '/images/product-1.jpg',
    rating: 4.8,
    reviews: 245,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'White', 'Black'],
  },
  {
    id: '2',
    name: 'লিভারপুল ফুটবল জার্সি',
    teamName: 'Liverpool',
    price: 1400,
    image: '/images/product-2.jpg',
    rating: 4.9,
    reviews: 312,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'White'],
  },
  {
    id: '3',
    name: 'বাংলাদেশ ক্রিকেট জার্সি',
    teamName: 'Bangladesh Cricket Team',
    price: 1200,
    image: '/images/product-3.jpg',
    rating: 4.7,
    reviews: 198,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Red'],
  },
  {
    id: '4',
    name: 'রিয়েল মাদ্রিদ জার্সি',
    teamName: 'Real Madrid',
    price: 1800,
    image: '/images/product-4.jpg',
    rating: 4.9,
    reviews: 456,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Yellow'],
  },
  {
    id: '5',
    name: 'চেলসি ফুটবল জার্সি',
    teamName: 'Chelsea',
    price: 1400,
    image: '/images/product-5.jpg',
    rating: 4.6,
    reviews: 234,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue', 'White'],
  },
  {
    id: '6',
    name: 'পাকিস্তান ক্রিকেট জার্সি',
    teamName: 'Pakistan Cricket Team',
    price: 1200,
    image: '/images/product-6.jpg',
    rating: 4.5,
    reviews: 167,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'White'],
  },
  {
    id: '7',
    name: 'বার্সেলোনা হোম জার্সি',
    teamName: 'Barcelona',
    price: 1600,
    image: '/images/product-7.jpg',
    rating: 4.8,
    reviews: 378,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blaugrana', 'White'],
  },
  {
    id: '8',
    name: 'প্যারিস সেন্ট জার্মেইন জার্সি',
    teamName: 'PSG',
    price: 1700,
    image: '/images/product-8.jpg',
    rating: 4.7,
    reviews: 289,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'White'],
  },
];

export default function ProductGrid() {
  const [products] = useState(sampleProducts);

  return (
    <div className="product-grid py-5">
      <div className="container-fluid px-4">
        <h2 className="text-light fw-bold mb-4">🛍️ আমাদের সব পণ্য</h2>
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
