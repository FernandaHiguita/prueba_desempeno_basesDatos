import { Router } from "express";
import { createProductC, deleteById, getAll, getById, updateById } from "../controllers/product.controller.js";

export const productsRoutes = Router(); 

productsRoutes.post('/', createProductC); 
productsRoutes.get('/', getAll); 
productsRoutes.get('/:id', getById); 
productsRoutes.delete('/:id', deleteById); 
productsRoutes.put('/:id', updateById); 