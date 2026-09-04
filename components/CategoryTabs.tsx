'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  { id: 'all', label: 'সমস্ত', icon: '📦' },
  { id: 'football', label: 'ফুটবল', icon: '⚽' },
  { id: 'cricket', label: 'ক্রিকেট', icon: '🏏' },
  { id: 'national', label: 'জাতীয়', icon: '🇧🇩' },
];

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

export default function CategoryTabs({ onCategoryChange, activeCategory }: CategoryTabsProps) {
  return (
    <div className="category-tabs py-4 border-bottom border-secondary">
      <div className="container-fluid">
        <div className="d-flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`btn fw-bold px-4 py-2 rounded-pill white-space-nowrap category-tab ${
                activeCategory === cat.id
                  ? 'btn-warning text-dark'
                  : 'btn-outline-secondary text-light'
              }`}
              onClick={() => onCategoryChange(cat.id)}
            >
              <span className="me-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
