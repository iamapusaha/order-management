import { Request, Response } from 'express';
import { orderService } from './order.services';
import orderValidationSchema from './order.joi.validation';
const createOrder = async (req: Request, res: Response) => {
  // Validate the order data
  const orderData = req.body;
  const { error } = orderValidationSchema.validate(orderData);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details,
    });
  }
  try {
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
    const email = req.query.email as string | undefined;

    const result = await orderService.getOrderData(email);

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
