import { Order } from './order.interface';
import { orderModel } from './order.model';

const createOrder = async (order: Order) => {
  const result = await orderModel.create(order);
  return result;
};
const getOrderData = async () => {
  const result = await orderModel.find();
  return result;
};

export const orderService = {
  createOrder,
  getOrderData,
};
