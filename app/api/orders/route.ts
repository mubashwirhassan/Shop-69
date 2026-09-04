import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Order from '@/models/Order';
import { verifyToken, getTokenFromRequest } from '@/utils/auth';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const token = getTokenFromRequest(req);
    const userId = token ? verifyToken(token) : null;

    if (!userId) {
      return NextResponse.json(
        { message: 'Please login first' },
        { status: 401 }
      );
    }

    const { items, totalPrice, shippingAddress, paymentMethod } = await req.json();

    const order = await Order.create({
      user: userId,
      items,
      totalPrice,
      shippingAddress,
      paymentMethod,
    });

    return NextResponse.json(
      {
        message: 'Order created successfully',
        order,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const token = getTokenFromRequest(req);
    const userId = token ? verifyToken(token) : null;

    if (!userId) {
      return NextResponse.json(
        { message: 'Please login first' },
        { status: 401 }
      );
    }

    const orders = await Order.find({ user: userId })
      .populate('items.product')
      .sort({ createdAt: -1 });

    return NextResponse.json(orders, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
