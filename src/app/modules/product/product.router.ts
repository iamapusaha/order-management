import express from 'express';
import { studentController } from './product.controller';
const router = express.Router();
router.post('/', studentController.createProduct);
router.get('/', studentController.getProduct);

export const productRouters = router;
