'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'লগইন ব্যর্থ হয়েছে');
      } else {
        // Store token
        localStorage.setItem('token', data.token);
        window.location.href = '/profile';
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
                    লগইন করুন
                  </h2>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label text-secondary mb-2">
                        ইমেইল
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="your@email.com"
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-warning fw-bold w-100 py-2 mb-3"
                      disabled={loading}
                    >
                      {loading ? 'লগইন হচ্ছে...' : 'লগইন করুন'}
                    </button>
                  </form>

                  <div className="text-center">
                    <p className="text-secondary small mb-0">
                      অ্যাকাউন্ট নেই?{' '}
                      <a href="/register" className="text-warning fw-bold text-decoration-none">
                        রেজিস্টার করুন
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
