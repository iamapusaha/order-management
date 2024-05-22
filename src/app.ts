import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouters } from './app/modules/product/product.router';
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/product', productRouters);
console.log(productRouters);
app.get('/', (req: Request, res: Response) => {
  res.send('order management is running');
});

export default app;
