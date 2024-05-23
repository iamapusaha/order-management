import { Schema, model } from 'mongoose';
import { Product, variant } from './product.interface';

const variantsSchema = new Schema<variant>({
  type: {
    type: String,
    require: true,
  },
  value: {
    type: String,
    require: true,
  },
});
const productSchema = new Schema<Product>({
  name: {
    type: String,
    require: [true, 'Name is required'],
  },
  description: {
    type: String,
    require: [true, 'Description is required'],
  },
  price: {
    type: Number,
    require: [true, 'Price is required'],
  },
  category: {
    type: String,
    require: [true, 'Category is required'],
  },
  tags: {
    type: [String],
    require: true,
  },
  variants: {
    type: [variantsSchema],
  },
  inventory: {
    type: Object,
  },
});

export const productModel = model<Product>('Product', productSchema);
