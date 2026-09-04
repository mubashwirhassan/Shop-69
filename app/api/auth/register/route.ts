import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { generateToken } from '@/utils/auth';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, email, password, phone } = await req.json();

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    // Create new user
    user = await User.create({
      name,
      email,
      password,
      phone,
    });

    const token = generateToken(user._id.toString());

    return NextResponse.json(
      {
        message: 'User registered successfully',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Registration failed' },
      { status: 500 }
    );
  }
}
