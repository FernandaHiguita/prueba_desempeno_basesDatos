import { Router } from "express";
import { createSupplierC, deleteById, getAlls, getById, updateById } from "../controllers/suppliers.controller.js";

export const suppliersRoutes = Router(); 

suppliersRoutes.post('/', createSupplierC); 
suppliersRoutes.get('/', getAlls);
suppliersRoutes.get('/:id', getById);
suppliersRoutes.delete('/:id', deleteById);
suppliersRoutes.put('/:id', updateById); 