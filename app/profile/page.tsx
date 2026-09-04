'use client';

import React, { useState } from 'react';
import { LogOut, Edit2, MapPin, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('info');
  const [user, setUser] = useState({
    name: 'রহিম আহমেদ',
    email: 'rahim@example.com',
    phone: '+880 1700-000000',
    address: 'বনানী, ঢাকা',
    city: 'ঢাকা',
    zipCode: '1213',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(user);

  const orders = [
    {
      id: 'ORD-001',
      date: '২০২৪-০৯-০১',
      items: 'ম্যাঞ্চেস্টার ইউনাইটেড হোম জার্সি x2',
      total: 3000,
      status: 'Delivered',
      trackingUrl: '#',
    },
    {
      id: 'ORD-002',
      date: '২০২৪-০৯-০৩',
      items: 'লিভারপুল ফুটবল জার্সি x1',
      total: 1400,
      status: 'Shipped',
      trackingUrl: '#',
    },
  ];

  const favorites = [
    {
      id: '3',
      name: 'বাংলাদেশ ক্রিকেট জার্সি',
      price: 1200,
      image: '/images/product-3.jpg',
    },
    {
      id: '4',
      name: 'রিয়েল মাদ্রিদ জার্সি',
      price: 1800,
      image: '/images/product-4.jpg',
    },
  ];

  const handleSaveProfile = () => {
    setUser(editForm);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark">
      <Navbar />

      <div className="flex-grow-1 py-5">
        <div className="container-fluid">
          <div className="row g-5">
            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="card bg-secondary-dark border-warning shadow-lg">
                <div className="card-body text-center p-4">
                  <div
                    className="rounded-circle bg-warning mx-auto mb-3"
                    style={{ width: '80px', height: '80px' }}
                  >
                    <span className="d-flex align-items-center justify-content-center h-100 fs-1 fw-bold text-dark">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <h5 className="text-light fw-bold mb-1">{user.name}</h5>
                  <p className="text-secondary small mb-4">{user.email}</p>

                  <div className="list-group list-group-flush">
                    <button
                      className={`list-group-item bg-secondary-dark border-secondary text-light fw-bold ${
                        activeTab === 'info' ? 'border-warning' : ''
                      }`}
                      onClick={() => setActiveTab('info')}
                    >
                      👤 আমার তথ্য
                    </button>
                    <button
                      className={`list-group-item bg-secondary-dark border-secondary text-light fw-bold ${
                        activeTab === 'orders' ? 'border-warning' : ''
                      }`}
                      onClick={() => setActiveTab('orders')}
                    >
                      📦 আমার অর্ডার
                    </button>
                    <button
                      className={`list-group-item bg-secondary-dark border-secondary text-light fw-bold ${
                        activeTab === 'favorites' ? 'border-warning' : ''
                      }`}
                      onClick={() => setActiveTab('favorites')}
                    >
                      ❤️ পছন্দের তালিকা
                    </button>
                    <button
                      className="list-group-item bg-secondary-dark border-secondary text-danger fw-bold"
                      onClick={handleLogout}
                    >
                      <LogOut size={18} className="me-2" />
                      লগআউট
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9">
              {/* Personal Info Tab */}
              {activeTab === 'info' && (
                <div className="card bg-secondary-dark border-warning shadow-lg">
                  <div className="card-header bg-secondary-dark border-warning py-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-warning fw-bold mb-0">👤 ব্যক্তিগত তথ্য</h5>
                      <button
                        className="btn btn-sm btn-warning fw-bold"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <Edit2 size={16} className="me-1" />
                        {isEditing ? 'বাতিল' : 'সম্পাদনা'}
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    {!isEditing ? (
                      <div>
                        <div className="mb-4">
                          <label className="text-secondary small fw-bold">নাম</label>
                          <p className="text-light fs-5 fw-bold">{user.name}</p>
                        </div>
                        <div className="mb-4">
                          <label className="text-secondary small fw-bold">ইমেইল</label>
                          <p className="text-light fs-5 fw-bold">{user.email}</p>
                        </div>
                        <div className="mb-4">
                          <label className="text-secondary small fw-bold">ফোন নম্বর</label>
                          <p className="text-light fs-5 fw-bold">{user.phone}</p>
                        </div>
                        <div className="mb-4">
                          <label className="text-secondary small fw-bold">ঠিকানা</label>
                          <p className="text-light fs-5 fw-bold">{user.address}</p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label className="text-secondary small fw-bold">শহর</label>
                            <p className="text-light fs-5 fw-bold">{user.city}</p>
                          </div>
                          <div className="col-md-6">
                            <label className="text-secondary small fw-bold">জিপ কোড</label>
                            <p className="text-light fs-5 fw-bold">{user.zipCode}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <form>
                        <div className="mb-3">
                          <label className="form-label text-secondary fw-bold">নাম</label>
                          <input
                            type="text"
                            className="form-control"
                            value={editForm.name}
                            onChange={(e) =>
                              setEditForm({ ...editForm, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-secondary fw-bold">ফোন</label>
                          <input
                            type="tel"
                            className="form-control"
                            value={editForm.phone}
                            onChange={(e) =>
                              setEditForm({ ...editForm, phone: e.target.value })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label text-secondary fw-bold">ঠিকানা</label>
                          <input
                            type="text"
                            className="form-control"
                            value={editForm.address}
                            onChange={(e) =>
                              setEditForm({ ...editForm, address: e.target.value })
                            }
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-secondary fw-bold">শহর</label>
                            <input
                              type="text"
                              className="form-control"
                              value={editForm.city}
                              onChange={(e) =>
                                setEditForm({ ...editForm, city: e.target.value })
                              }
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label text-secondary fw-bold">জিপ কোড</label>
                            <input
                              type="text"
                              className="form-control"
                              value={editForm.zipCode}
                              onChange={(e) =>
                                setEditForm({ ...editForm, zipCode: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-warning fw-bold w-100"
                          onClick={handleSaveProfile}
                        >
                          সংরক্ষণ করুন
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h4 className="text-light fw-bold mb-4 border-left border-warning ps-3">
                    📦 আমার অর্ডার ({orders.length})
                  </h4>
                  {orders.map((order) => (
                    <div key={order.id} className="card bg-secondary-dark border-warning mb-3">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-md-6">
                            <h6 className="text-warning fw-bold mb-2">{order.id}</h6>
                            <p className="text-secondary small mb-2">📅 {order.date}</p>
                            <p className="text-light small">{order.items}</p>
                          </div>
                          <div className="col-md-6 text-md-end">
                            <p className="text-warning fw-bold fs-5 mb-2">
                              ৳ {order.total.toLocaleString()}
                            </p>
                            <span
                              className={`badge ${
                                order.status === 'Delivered'
                                  ? 'bg-success'
                                  : 'bg-info'
                              }`}
                            >
                              {order.status}
                            </span>
                            <button className="btn btn-sm btn-outline-warning ms-2">
                              ট্র্যাক করুন
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Favorites Tab */}
              {activeTab === 'favorites' && (
                <div>
                  <h4 className="text-light fw-bold mb-4 border-left border-warning ps-3">
                    ❤️ পছন্দের তালিকা ({favorites.length})
                  </h4>
                  <div className="row g-4">
                    {favorites.map((item) => (
                      <div key={item.id} className="col-md-6">
                        <div className="card bg-secondary-dark border-warning shadow-sm">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="card-img-top"
                            style={{ height: '200px', objectFit: 'cover' }}
                          />
                          <div className="card-body">
                            <h6 className="card-title text-light fw-bold">{item.name}</h6>
                            <p className="text-warning fw-bold fs-5 mb-3">
                              ৳ {item.price.toLocaleString()}
                            </p>
                            <button className="btn btn-warning fw-bold w-100">
                              🛒 কার্টে যোগ করুন
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
