# API Setup & Configuration Guide

## 📋 সম্পূর্ণ API সেটআপ গাইড

এই গাইডটি অনুসরণ করে আপনি সম্পূর্ণ API সেটআপ করতে পারবেন এবং MongoDB এবং Stripe কনফিগার করতে পারবেন।

## ✅ প্রিরিকোয়েজিট

- Node.js v18+
- npm/yarn
- MongoDB (Local অথবা Atlas)
- Stripe অ্যাকাউন্ট
- Git

## 🗄️ ধাপ ১: MongoDB সেটআপ

### অপশন A: Local MongoDB

#### Windows এ MongoDB ইনস্টল করুন

1. [MongoDB Community Edition](https://www.mongodb.com/try/download/community) ডাউনলোড করুন
2. ইনস্টলার চালান এবং ডিফল্ট সেটিংস রাখুন
3. Command Prompt এ চেক করুন:
   ```bash
   mongod --version
   ```
4. MongoDB শুরু করুন:
   ```bash
   mongod
   ```
   অথবা Windows Service হিসেবে চালান।

#### Mac এ MongoDB ইনস্টল করুন

```bash
# Homebrew ব্যবহার করে
brew tap mongodb/brew
brew install mongodb-community

# MongoDB শুরু করুন
brew services start mongodb-community

# স্টেটাস চেক করুন
brew services list
```

#### Linux এ MongoDB ইনস্টল করুন

```bash
# Ubuntu/Debian
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# শুরু করুন
sudo systemctl start mongod
```

### অপশন B: MongoDB Atlas (ক্লাউড)

1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) এ যান
2. আপনার অ্যাকাউন্ট তৈরি করুন
3. একটি নতুন প্রজেক্ট তৈরি করুন:
   - প্রজেক্ট নাম: "Shop 69"
   - "Create" ক্লিক করুন
4. একটি ক্লাস্টার তৈরি করুন:
   - "Build a Database" এ ক্লিক করুন
   - Tier নির্বাচন করুন (M0 Free - বিনামূল্যে)
   - Region নির্বাচন করুন (Asia)
   - "Create" ক্লিক করুন
5. ডাটাবেস অ্যাক্সেস সেটআপ করুন:
   - Username: `admin`
   - Password: একটি শক্তিশালী পাসওয়ার্ড তৈরি করুন
   - "Create User" ক্লিক করুন
6. সংযোগ স্ট্রিং পান:
   - "Connect" বাটন ক্লিক করুন
   - "Connect your application" নির্বাচন করুন
   - সংযোগ স্ট্রিং কপি করুন

**উদাহরণ সংযোগ স্ট্রিং:**
```
mongodb+srv://admin:password@cluster0.mongodb.net/shop69?retryWrites=true&w=majority
```

## 🔑 ধাপ ২: এনভায়রনমেন্ট ভেরিয়েবল সেটআপ

### `.env.local` ফাইল তৈরি করুন

প্রজেক্ট রুটে `.env.local` ফাইল তৈরি করুন:

```bash
# MongoDB Connection
# Local MongoDB এর জন্য:
MONGODB_URI=mongodb://localhost:27017/shop69

# MongoDB Atlas এর জন্য:
# MONGODB_URI=mongodb+srv://admin:password@cluster0.mongodb.net/shop69?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345

# Stripe Keys (পরবর্তী অধ্যায়ে পাবেন)
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_your_public_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# App Settings
APP_NAME=Shop 69
NODE_ENV=development
```

## 💳 ধাপ ৩: Stripe সেটআপ

### Stripe অ্যাকাউন্ট তৈরি করুন

1. [Stripe](https://stripe.com) এ যান
2. "Sign up" ক্লিক করুন
3. আপনার ইমেইল এবং পাসওয়ার্ড দিয়ে সাইন আপ করুন
4. আপনার ব্যবসায়িক তথ্য পূরণ করুন
5. ইমেইল ভেরিফিকেশন সম্পূর্ণ করুন

### API Keys পান

1. Stripe Dashboard এ লগইন করুন
2. "Developers" মেনু তে যান
3. "API keys" সেলেক্ট করুন
4. দুটি কী পাবেন:
   - **Publishable key** (Public): `pk_test_...` - এটি Frontend এ ব্যবহৃত হয়
   - **Secret key** (Private): `sk_test_...` - এটি Backend এ ব্যবহৃত হয়

### Stripe Keys `.env.local` এ যোগ করুন

```bash
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_51234567890abcdefghij
STRIPE_SECRET_KEY=sk_test_987654321zyxwvutsrqp
```

## 🔧 ধাপ ৪: API Endpoints সেটআপ এবং টেস্টিং

### অতিরিক্ত API Endpoints যোগ করুন

#### চেকআউট এন্ডপয়েন্ট (Payment Processing)

`app/api/checkout/route.ts` তৈরি করুন:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { verifyToken, getTokenFromRequest } from '@/utils/auth';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  try {
    const token = getTokenFromRequest(req);
    const userId = token ? verifyToken(token) : null;

    if (!userId) {
      return NextResponse.json(
        { message: 'Please login first' },
        { status: 401 }
      );
    }

    const { items, totalPrice } = await req.json();

    // Stripe Checkout Session তৈরি করুন
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item: any) => ({
        price_data: {
          currency: 'bdt',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), // পয়সায় রূপান্তর
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_API_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/cart`,
      metadata: {
        userId,
      },
    });

    return NextResponse.json(
      { sessionId: session.id, url: session.url },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Checkout failed' },
      { status: 500 }
    );
  }
}
```

#### Admin Products API (প্রোডাক্ট ম্যানেজমেন্ট)

`app/api/admin/products/route.ts` তৈরি করুন:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Product from '@/models/Product';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, description, price, image, category, stock, size, color } =
      await req.json();

    const product = await Product.create({
      name,
      description,
      price,
      image,
      category,
      stock,
      size,
      color,
    });

    return NextResponse.json(
      {
        message: 'Product created successfully',
        product,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Failed to create product' },
      { status: 500 }
    );
  }
}
```

### Postman দিয়ে API টেস্ট করুন

1. [Postman](https://www.postman.com/downloads/) ডাউনলোড এবং ইনস্টল করুন
2. নতুন Request তৈরি করুন

#### রেজিস্ট্রেশন টেস্ট করুন

```
Method: POST
URL: http://localhost:3000/api/auth/register
Headers:
  Content-Type: application/json

Body (JSON):
{
  "name": "রহিম আহমেদ",
  "email": "rahim@test.com",
  "password": "password123",
  "phone": "+880 1700-000000"
}
```

#### লগইন টেস্ট করুন

```
Method: POST
URL: http://localhost:3000/api/auth/login
Headers:
  Content-Type: application/json

Body (JSON):
{
  "email": "rahim@test.com",
  "password": "password123"
}
```

#### পণ্য সব পান

```
Method: GET
URL: http://localhost:3000/api/products?category=football&page=1
Headers:
  Content-Type: application/json
```

#### অর্ডার তৈরি করুন

```
Method: POST
URL: http://localhost:3000/api/orders
Headers:
  Content-Type: application/json
  Authorization: Bearer YOUR_JWT_TOKEN_HERE

Body (JSON):
{
  "items": [
    {
      "product": "PRODUCT_ID",
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
```

## 📊 Database Schema

### User Schema

```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  address: String,
  city: String,
  zipCode: String,
  country: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Schema

```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  stock: Number,
  sku: String (unique),
  size: [String],
  color: [String],
  rating: Number,
  reviews: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Schema

```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  items: [
    {
      product: ObjectId (ref: Product),
      quantity: Number,
      price: Number,
      size: String,
      color: String
    }
  ],
  totalPrice: Number,
  shippingAddress: String,
  paymentMethod: String,
  paymentStatus: String,
  orderStatus: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 আপনার প্রথম অর্ডার পরীক্ষা করুন

### ধাপ ১: প্রোডাক্ট যোগ করুন (MongoDB)

MongoDB Compass বা Atlas এ `products` কালেকশনে:

```javascript
db.products.insertOne({
  name: "মার্চেস্টার ইউনাইটেড হোম জার্সি",
  description: "অফিশিয়াল ম্যান ইউনাইটেড হোম জার্সি 2024",
  price: 1500,
  category: "Football",
  stock: 50,
  size: ["S", "M", "L", "XL", "XXL"],
  color: ["Red", "White", "Black"],
  image: "https://example.com/jersey.jpg",
  rating: 4.8,
  reviews: 245,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### ধাপ ২: ডেভেলপমেন্ট সার্ভার শুরু করুন

```bash
npm run dev
```

### ধাপ ৩: ওয়েবসাইট ব্রাউজ করুন

```
http://localhost:3000
```

### ধাপ ৪: প্রক্রিয়া অনুসরণ করুন

1. "রেজিস্টার করুন" বাটন ক্লিক করুন
2. আপনার তথ্য পূরণ করুন এবং অ্যাকাউন্ট তৈরি করুন
3. লগইন করুন
4. পণ্য ব্রাউজ করুন
5. কার্টে যোগ করুন
6. চেকআউট করুন
7. Stripe দিয়ে পেমেন্ট করুন (টেস্ট কার্ড: `4242 4242 4242 4242`)

## 🔒 প্রোডাকশনের জন্য প্রস্তুতি

### ১. Environment ভেরিয়েবল আপডেট করুন

```bash
# Production এ নতুন JWT_SECRET ব্যবহার করুন
JWT_SECRET=your_new_super_secure_random_secret_key_minimum_32_characters

# Stripe Live Keys ব্যবহার করুন (Test keys নয়)
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...

# API URL আপডেট করুন
NEXT_PUBLIC_API_URL=https://yourdomain.com
```

### ২. Vercel এ ডিপ্লয় করুন

```bash
# Vercel CLI ইনস্টল করুন
npm i -g vercel

# ডিপ্লয় করুন
vercel

# Production এ ডিপ্লয় করুন
vercel --prod
```

### ৩. Vercel ড্যাশবোর্ডে Environment Variables সেট করুন

- Settings → Environment Variables
- নিম্নলিখিত ভেরিয়েবল যোগ করুন:
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `STRIPE_PUBLIC_KEY`
  - `STRIPE_SECRET_KEY`
  - `NEXT_PUBLIC_API_URL`

## 🆘 সাধারণ সমস্যা এবং সমাধান

### MongoDB Connection Error

**সমস্যা:** `Error: connect ECONNREFUSED`

**সমাধান:**
```bash
# MongoDB চালু আছে কিনা চেক করুন
mongod

# অথবা MongoDB Atlas এর সংযোগ স্ট্রিং সঠিক কিনা চেক করুন
```

### JWT Token Invalid

**সমস্যা:** `Invalid or expired token`

**সমাধান:**
```bash
# JWT_SECRET মিলছে কিনা চেক করুন
# .env.local এ JWT_SECRET সঠিক আছে কিনা দেখুন
```

### Stripe Payment Failed

**সমস্যা:** `Card declined` অথবা `Invalid API Key`

**সমাধান:**
```bash
# Test mode ব্যবহার করছেন কিনা চেক করুন
# Stripe Test Card: 4242 4242 4242 4242
# Expiry: যেকোনো ভবিষ্যত তারিখ
# CVC: যেকোনো ৩ সংখ্যা
```

## 📚 অতিরিক্ত সম্পদ

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Stripe Documentation](https://stripe.com/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/)

## ✉️ সাহায্যের জন্য যোগাযোগ করুন

- 📧 Email: info@shop69.com
- 📱 WhatsApp: +880 1700-000000

---

**Happy Coding! 🚀**
