import express from 'express';
import { studentController } from './product.controller';
const router = express.Router();
router.post('/create-product', studentController.createProduct);

export const productRouters = router;
