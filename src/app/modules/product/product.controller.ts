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
const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: 'All product data are here!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'single product data are here by id!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.updateSingleProductById(
      productId,
      req.body,
    );
    if (!updateProductById) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: 'product update succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.deleteProductById(productId);
    res.status(200).json({
      success: true,
      message: 'product delete successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const studentController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProductById,
  deleteProductById,
};
