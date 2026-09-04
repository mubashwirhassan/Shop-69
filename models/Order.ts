import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  user: string;
  items: Array<{
    product: string;
    quantity: number;
    price: number;
    size: string;
    color: string;
  }>;
  totalPrice: number;
  shippingAddress: string;
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: Number,
        price: Number,
        size: String,
        color: String,
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingAddress: String,
    paymentMethod: {
      type: String,
      enum: ['Stripe', 'Cash on Delivery'],
      default: 'Stripe',
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending',
    },
    orderStatus: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model('Order', orderSchema);
