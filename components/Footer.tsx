'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 border-top border-secondary">
      <div className="container-fluid">
        <div className="row g-5">
          {/* Company Info */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Shop 69</h5>
            <p className="small text-secondary">
              সেরা মানের স্পোর্টস জার্সি, সাশ্রয়ী মূল্যে।
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-outline-light">FB</a>
              <a href="#" className="btn btn-sm btn-outline-light">IG</a>
              <a href="#" className="btn btn-sm btn-outline-light">TW</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">দ্রুত লিংক</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">সম্পর্কে</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">যোগাযোগ করুন</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">রিটার্ন পলিসি</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">গোপনীয়তা নীতি</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">সহায়তা</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">শিপিং তথ্য</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">ট্র্যাক অর্ডার</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">কাস্টমার সার্ভিস</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">যোগাযোগ কর��ন</h5>
            <p className="small text-secondary mb-2">
              📞 +880 1700-000000
            </p>
            <p className="small text-secondary mb-2">
              📧 info@shop69.com
            </p>
            <p className="small text-secondary">
              📍 ঢাকা, বাংলাদেশ
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center small text-secondary">
            <p>&copy; 2024 Shop 69. সর্বাধিকার সংরক্ষিত।</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
