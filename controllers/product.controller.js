import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductByID } from "../services/products.service.js";

export const createProductC = async (req, res) => {

    const {product_name, unit_price, stock, supplier_id} = req.body;

    try{
        const newProduct = await createProduct(product_name, unit_price, stock, supplier_id); 
        return res.status(201).json({
            response: "Product has been created correctly"
        });
    }catch(error){
        res.status(500).json({
            response: error
        }); 
    }
}

export const getAll = async(req, res) => {
    try{
        const customers = await getAllProducts()
        return res.status(200).json({
            response: customers.rows
        })
    }catch(error){
        res.status(500).json({
            response: error
        }); 
    }
}

export const getById = async (req, res) => {

    const { id } = req.params; 

    try{
        const getProduct = await getProductById(id)
        return res.status(200).json({
            response: getProduct
        })
    }catch(error){
        res.status(500).json({
            response: error
    });
}
}

export const deleteById = async (req, res) => {
    const { id } = req.params; 

    try{
        const deleteCustomer = await deleteProductById(id)
        return res.status(200).json({
            response: "Product has been eliminated correctly"
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export const updateById = async (req, res) => {
    const { id } = req.params; 
    const {product_name, unit_price, stock} = req.body; 

    try{
        const updateProduct = await updateProductByID(id,product_name,unit_price,stock); 
        return res.status(200).json({
            response: "Product has been updated correctly"
        })
    }catch(error){
        res.status(500).json({
            response: error
        })
    }
}