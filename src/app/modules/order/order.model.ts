import { Schema, model } from 'mongoose';
import { Order } from './order.interface';
const orderSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  productId: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});

export const orderModel = model<Order>('Order', orderSchema);
