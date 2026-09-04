import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { generateToken } from '@/utils/auth';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    // Validate email & password
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Please provide email and password' },
        { status: 400 }
      );
    }

    // Check for user
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = generateToken(user._id.toString());

    return NextResponse.json(
      {
        message: 'Logged in successfully',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || 'Login failed' },
      { status: 500 }
    );
  }
}
