import express from 'express'; 
import { connectPostgres } from './config/dbconfig.js';
import { customerRoutes } from './routes/customer.route.js';
import { suppliersRoutes } from './routes/supplier.route.js';
import { productsRoutes } from './routes/product.route.js';

await connectPostgres(); 

const app = express(); 

app.use(express.json()); 

app.use('/customers', customerRoutes); 
app.use('/suppliers', suppliersRoutes);
app.use('/products', productsRoutes); 

export default app; 