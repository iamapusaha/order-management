import { Schema, model, connect } from 'mongoose';
import { Product } from './product.interface';
const productSchema = new Schema<Product>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    variants: {
        type: [
            {
                type: String,
                value: String,
            },
        ],
        required: true,
    },
    inventory: {
        quantity: {
            type: Number,
            required: true,
        },
        inStock: {
            type: Boolean,
            required: true,
        },
    },
});

// Create the Product model
const ProductModel = model<Product>('Product', productSchema);

export default ProductModel;