import { Request, Response } from 'express';
import { orderService } from './order.services';
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderService.createOrder(orderData);
    res.status(200).json({
      success: true,
      message: 'order create succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getOrderData();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderController = {
  createOrder,
  getOrder,
};
