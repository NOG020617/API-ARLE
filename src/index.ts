import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import inventoryRoutes from './routes/inventoryRoutes';
import mechanicRoutes from './routes/mechanicRoutes';
import paymentRoutes from './routes/paymentRoutes';
import serviceRoutes from './routes/serviceRoutes';
import userRoutes from './routes/userRoutes';
import { createConnection } from 'typeorm';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/inventory', inventoryRoutes);
app.use('/api/mechanic', mechanicRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/user', userRoutes);

createConnection().then(() => {
  app.listen(6505, () => {
    console.log("Server activo");
  });
}).catch(error => console.log(error));

