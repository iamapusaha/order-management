import { Request, Response } from 'express';
import { productService } from './product.service';
import productValidationSchema from './product.joi.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const { error } = productValidationSchema.validate(productData);
    if (error) {
      res.status(500).json({
        success: false,
        message: 'somethings went wrong',
        error: error.details,
      });
    }
    const result = await productService.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'product data store successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'somethings went wrong',
      error,
    });
  }
};
const getProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string | undefined;

    const result = await productService.getAllProductFromDB(searchTerm);

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
  const productData = req.body;

  // Validate the product data
  const { error } = productValidationSchema.validate(productData);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.details,
    });
  }
  try {
    const { productId } = req.params;
    const result = await productService.updateSingleProductById(
      productId,
      req.body,
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
        data: null,
      });
    } else {
      return res.status(200).json({
        success: true,
        message: 'Product updated successfully',
        data: result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while updating the product',
      data: null,
    });
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
