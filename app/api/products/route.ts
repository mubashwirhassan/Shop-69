import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Product from '@/models/Product';

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = 12;

    let query = {};
    if (category) {
      query = { category };
    }

    const skip = (page - 1) * limit;
    const products = await Product.find(query)
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: -1 });

    const total = await Product.countDocuments(query);

    return NextResponse.json(
      {
        products,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
