# Shop 69 - Jersey E-Commerce Store

🏆 **একটি সম্পূর্ণ Next.js ভিত্তিক জার্সি বিক্রয় ওয়েবসাইট**

## 📋 বৈশিষ্ট্য (Features)

✅ **ব্যবহারকারী প্রমাণীকরণ**
- রেজিস্ট্রেশন এবং লগইন সিস্টেম
- JWT টোকেন ভিত্তিক সিকিউরিটি
- পাসওয়ার্ড এনক্রিপশন

✅ **পণ্য ম্যানেজমেন্ট**
- বিভিন্ন ক্যাটাগরিতে পণ্য (ফুটবল, ক্রিকেট, জাতীয়)
- পণ্য ফিল্টারিং এবং সার্চ
- সাইজ এবং রঙ সিলেক্টর
- পণ্য রিভিউ এবং রেটিং

✅ **কার্ট এবং চেকআউট**
- শপিং কার্ট ম্যানেজমেন্ট
- অর্ডার প্লেসমেন্��
- শিপিং এড্রেস ম্যানেজমেন্ট
- পেমেন্ট গেটওয়ে ইন্টিগ্রেশন (Stripe)

✅ **ব্যবহারকারী ড্যাশবোর্ড**
- প্রোফাইল ম্যানেজমেন্ট
- অর্ডার হিস্টরি
- অর্ডার ট্র্যাকিং
- পছন্দের তালিকা (Favorites)

✅ **ডিজাইন**
- Bootstrap সহ রেসপন্সিভ ডিজাইন
- ডার্ক থিম সহ আধুনিক UI
- মোবাইল-ফার্স্ট অ্যাপ্রোচ
- স্মুথ অ্যানিমেশন

## 🛠️ প্রযুক্তি স্ট্যাক

### Frontend
- **Next.js 14** - React ফ্রেমওয়ার্ক
- **TypeScript** - টাইপ সেফটি
- **Bootstrap 5** - UI কম্পোনেন্ট
- **Lucide Icons** - আইকন লাইব্রেরি
- **CSS Custom Properties** - থিমিং

### Backend
- **Next.js API Routes** - ব্যাকএন্ড এপিআই
- **Node.js** - রানটাইম
- **Express.js** (ঐচ্ছিক - API স্কেলিংয়ের জন্য)

### Database
- **MongoDB** - NoSQL ডাটাবেস
- **Mongoose** - ODM লাইব্রেরি

### Authentication
- **bcryptjs** - পাসওয়ার্ড হ্যাশিং
- **jsonwebtoken (JWT)** - টোকেন জেনারেশন

### Payment
- **Stripe** - পেমেন্ট প্রসেসিং

## 📁 প্রজেক্ট স্ট্রাকচার

```
Shop-69/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── register/route.ts
│   │   │   └── login/route.ts
│   │   ├── products/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   └── orders/
│   │       └── route.ts
│   ├── page.tsx                 # হোম পেজ
│   ├── login/page.tsx           # লগইন পেজ
│   ├── register/page.tsx        # রেজিস্ট্রেশন পেজ
│   ├── product/[id]/page.tsx    # পণ্য বিস্তারিত পেজ
│   ├── cart/page.tsx            # কার্ট পেজ
│   ├── profile/page.tsx         # প্রোফাইল পেজ
│   ├── layout.tsx              # লেআউট
│   └── page.tsx                # রুট পেজ
├── components/
│   ├── Navbar.tsx
│   ├── HeroBanner.tsx
│   ├── CategoryTabs.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── Footer.tsx
├── models/
│   ├── User.ts
│   ├── Product.ts
│   └── Order.ts
├── lib/
│   └── db.ts                   # MongoDB সংযোগ
├── utils/
│   └── auth.ts                 # অথেন্টিকেশন ইউটিলস
├── styles/
│   └── globals.css             # গ্লোবাল স্টাইল
├── public/
│   ├── logo.png
│   └── images/
│       ├── product-1.jpg
│       ├── product-2.jpg
│       └── ...
├── .env.example                # এনভায়রনমেন্ট ভেরিয়েবল টেমপ্লেট
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🚀 শুরু করুন

### ১. প্রিরিকোয়েজিট
- Node.js (v18+)
- npm অথবা yarn
- MongoDB (Local অথবা Atlas)
- Stripe অ্যাকাউন্ট

### ২. ইনস্টলেশন

```bash
# রিপোজিটরি ক্লোন করুন
git clone https://github.com/mubashwirhassan/Shop-69.git
cd Shop-69

# প্যাকেজ ইনস্টল করুন
npm install

# অথবা yarn
yarn install
```

### ৩. এনভায়রনমেন্ট সেটআপ

`.env.local` ফাইল তৈরি করুন এবং নিম্নলিখিত যোগ করুন:

```bash
# MongoDB
MONGODB_URI=mongodb://localhost:27017/shop69
# অথবা MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shop69

# JWT
JWT_SECRET=your_super_secret_key_change_this_in_production

# Stripe
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_your_public_key
STRIPE_SECRET_KEY=sk_test_your_secret_key

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3000

# অন্যান্য
APP_NAME=Shop 69
```

### ৪. ডেভেলপমেন্ট সার্ভার চালান

```bash
npm run dev
```

ব্রাউজার খুলুন এবং `http://localhost:3000` ভিজিট করুন।

## 📚 API এন্ডপয়েন্ট

### প্রমাণীকরণ এপিআই

#### রেজিস্ট্রেশন
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "রহিম আহমেদ",
  "email": "rahim@example.com",
  "password": "securePassword123",
  "phone": "+880 1700-000000"
}

Response: 201
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "রহিম আহমেদ",
    "email": "rahim@example.com"
  }
}
```

#### লগইন
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "rahim@example.com",
  "password": "securePassword123"
}

Response: 200
{
  "message": "Logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "রহিম আহমেদ",
    "email": "rahim@example.com"
  }
}
```

### পণ্য এপিআই

#### সব পণ্য পান
```
GET /api/products?category=football&page=1

Response: 200
{
  "products": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "মার্চেস্টার ইউনাইটেড হোম জার্সি",
      "price": 1500,
      "category": "Football",
      "image": "...",
      "rating": 4.8,
      "reviews": 245
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 45,
    "pages": 4
  }
}
```

#### নির্দিষ্ট পণ্য পান
```
GET /api/products/507f1f77bcf86cd799439011

Response: 200
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "মার্চেস্টার ইউনাইটেড হোম জার্সি",
  "description": "...",
  "price": 1500,
  "sizes": ["S", "M", "L", "XL", "XXL"],
  "colors": ["Red", "White", "Black"],
  "stock": 45,
  "rating": 4.8,
  "reviews": 245
}
```

### অর্ডার এপিআই

#### অর্ডার তৈরি করুন
```
POST /api/orders
Authorization: Bearer token
Content-Type: application/json

{
  "items": [
    {
      "product": "507f1f77bcf86cd799439011",
      "quantity": 2,
      "price": 1500,
      "size": "M",
      "color": "Red"
    }
  ],
  "totalPrice": 3000,
  "shippingAddress": "বনানী, ঢাকা",
  "paymentMethod": "Stripe"
}

Response: 201
{
  "message": "Order created successfully",
  "order": {
    "_id": "507f1f77bcf86cd799439012",
    "user": "507f1f77bcf86cd799439011",
    "items": [...],
    "totalPrice": 3000,
    "orderStatus": "Pending",
    "paymentStatus": "Pending"
  }
}
```

#### ব্যবহারকারীর অর্ডার পান
```
GET /api/orders
Authorization: Bearer token

Response: 200
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "user": "507f1f77bcf86cd799439011",
    "items": [...],
    "totalPrice": 3000,
    "orderStatus": "Pending",
    "createdAt": "2024-09-04T..."
  }
]
```

## 🔐 সিকিউরিটি

- ✅ পাসওয়ার্ড bcryptjs দিয়ে হ্যাশ করা
- ✅ JWT টোকেন ভিত্তিক অথেন্টিকেশন
- ✅ এনভায়রনমেন্ট ভেরিয়েবলে সিক্রেট কী
- ✅ HTTPS এনক্রিপশন (প্রোডাকশনে)
- ✅ CORS সুরক্ষা

## 📦 ডিপ্লয়মেন্ট

### Vercel এ ডিপ্লয় করুন

```bash
# Vercel CLI ইনস্টল করুন
npm i -g vercel

# প্রজেক্ট ডিপ্লয় করুন
vercel
```

### পরিবেশ ভেরিয়েবল সেট করুন (Vercel ড্যাশবোর্ডে):
- `MONGODB_URI`
- `JWT_SECRET`
- `STRIPE_PUBLIC_KEY`
- `STRIPE_SECRET_KEY`

## 🐛 ট্রাবলশুটিং

### MongoDB সংযোগ সমস্যা
```bash
# MongoDB চালু আছে কিনা চেক করুন
mongod --version

# Local MongoDB শুরু করুন
mongod
```

### পোর্ট ইতিমধ্যে ব্যবহৃত
```bash
# ভিন্ন পোর্টে চালান
npm run dev -- -p 3001
```

### ডাটাবেস সিডিং

```bash
# প্রোডাক্ট ডাটা যোগ করার জন্য MongoDB তে সরাসরি ইনসার্ট করুন
# অথবা একটি seed স্ক্রিপ্ট তৈরি করুন
```

## 📝 ভবিষ্যতের উন্নতি

- [ ] পেমেন্ট প্রসেসিং (Stripe ইন্টিগ্রেশন)
- [ ] ইমেইল নোটিফিকেশন
- [ ] এসএমএস ট্র্���াকিং আপডেট
- [ ] অ্যাডমিন ড্যাশবোর্ড
- [ ] পণ্য রিভিউ সিস্টেম
- [ ] উইশলিস্ট বৈশিষ্ট্য
- [ ] রেফারেল প্রোগ্রাম
- [ ] SEO অপটিমাইজেশন

## 📞 যোগাযোগ এবং সহায়তা

- 📧 ইমেইল: info@shop69.com
- 📱 ফোন: +880 1700-000000
- 📍 ঠিকানা: ঢাকা, বাংলাদেশ

## 📄 লাইসেন্স

এই প্রজেক্ট MIT লাইসেন্সের অধীন।

## 👨‍💻 বিকাশকারী

**Mubashwir Hassan**
- GitHub: [@mubashwirhassan](https://github.com/mubashwirhassan)

---

**Shop 69** - আপনার প্রিয় জার্সি এখানে পাবেন! 🏆⚽
