import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Product from '@/models/Product';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);

    if (!product) {
      return NextResponse.json(
        { message: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
