import { Product } from './product.interface';
import { productModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await productModel.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await productModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};

const updateSingleProductById = async (
  id: string,
  payload: Partial<Product>,
) => {
  const result = await productModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteProductById = async (id: string) => {
  const result = await productModel.findByIdAndDelete(id);
  return result;
};
export const productService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateSingleProductById,
  deleteProductById,
};
