import express from 'express';
import { studentController } from './product.controller';
const router = express.Router();
router.post('/', studentController.createProduct);
router.get('/', studentController.getProduct);
router.get('/:productId', studentController.getSingleProduct);
router.put('/:productId', studentController.updateProductById);
router.delete('/:productId', studentController.deleteProductById);

export const productRouters = router;
