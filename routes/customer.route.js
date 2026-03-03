import { Router } from "express";
import { createCustomerC, deleteById, getAll, getById, updateById } from "../controllers/customers.controller.js";

export const customerRoutes = Router(); 

customerRoutes.post('/', createCustomerC)
customerRoutes.get('/', getAll)
customerRoutes.get('/:id', getById)
customerRoutes.delete('/:id', deleteById)
customerRoutes.put('/:id', updateById)