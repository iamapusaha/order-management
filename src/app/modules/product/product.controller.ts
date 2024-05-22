import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await productService.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'product data store successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const studentController = {
  createProduct,
};
