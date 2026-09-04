'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'রেজিস্ট্রেশন ব্যর্থ হয়েছে');
      } else {
        setSuccess('রেজিস্ট্রেশন সফল হয়েছে!');
        localStorage.setItem('token', data.token);
        setTimeout(() => {
          window.location.href = '/profile';
        }, 2000);
      }
    } catch (err) {
      setError('কোনো ত্রুটি ঘটেছে');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark">
      <Navbar />
      <div className="flex-grow-1 d-flex align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary-dark border-warning shadow-lg">
                <div className="card-body p-5">
                  <h2 className="card-title fw-bold text-warning mb-4 text-center">
                    রেজিস্টার করুন
                  </h2>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="alert alert-success" role="alert">
                      {success}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label text-secondary mb-2">
                        নাম
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="আপনার নাম"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label text-secondary mb-2">
                        ইমেইল
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label text-secondary mb-2">
                        ফোন নম্বর
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1700-000000"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="form-label text-secondary mb-2">
                        পাসওয়ার্ড
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="••••••••"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-warning fw-bold w-100 py-2 mb-3"
                      disabled={loading}
                    >
                      {loading ? 'রেজিস্টার হচ্ছে...' : 'রেজিস্টার করুন'}
                    </button>
                  </form>

                  <div className="text-center">
                    <p className="text-secondary small mb-0">
                      ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
                      <a href="/login" className="text-warning fw-bold text-decoration-none">
                        লগইন করুন
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
