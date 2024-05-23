import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouters } from './app/modules/product/product.router';
import { orderRouters } from './app/modules/order/order.router';
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouters);
app.use('/api/orders', orderRouters);
app.get('/', (req: Request, res: Response) => {
  res.send('order management is running');
});

export default app;
