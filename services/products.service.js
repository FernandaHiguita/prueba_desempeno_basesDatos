import { pool } from "../config/dbconfig.js";

export const createProduct = async (product_name, unit_price, stock, supplier_id) => {

    const query = `INSERT INTO luisa_h_2.products(product_name, unit_price, stock, supplier_id) VALUES ($1, $2, $3, $4) RETURNING product_sku, product_name`;
    const values = [product_name, unit_price, stock, supplier_id]; 

    try {
        const response = await pool.query(query, values); 
        if(!response.rows[0]) {
            throw Error("Product don't created"); 
        }
        return response; 
    }catch (error){
        console.error(`Product don't created: ${error}`);
        throw(error);  
    }
}

export const getAllProducts = async () => {
    const query = `select * from luisa_h_2.products`;

    try{
        const response = await pool.query(query); 

        if(!response.rows[0]){
            throw Error(`Can't show all products`)
        }
        return response; 
    } catch(error){
        console.error(`Can't show all products ${error}`)
        throw error; 
    }
}

export const getProductById =  async (id) => {
    const query = `select * from luisa_h_2.products where product_sku=$1`; 
    const value = [id]; 

    try{

        const response = await pool.query(query, value); 

        if(response.rowCount === 0){
            throw Error(`Product has not exist`)
        }

        return response; 
    }catch (error){
        console.error(`Can't show a product ${error}`)
        throw error;
    }
}

export const deleteProductById = async (id) => {
    const query = `DELETE FROM luisa_h_2.products where product_sku = $1`;
    const values = [id]; 

    try {
        const response = await pool.query(query, values)

        if(response.rowCount===0){
            throw Error('Product has not exist'); 
        }
        return response; 
    }catch (error){
        console.error(`Can't delete a product ${error}`)
        throw error;
    }
}

export const updateProductByID = async (id, product_name, unit_price, stock) => {
    const query = `UPDATE luisa_h_2.products SET product_name = $2, unit_price = $3, stock = $4 where product_sku = $1`; 
    const values = [id, product_name, unit_price, stock]

    try {
        const response = await pool.query(query, values)

        if(response.rowCount===0){
            throw Error('Product has not exist'); 
        }
    }catch (error){
        console.error(`Can't update a product ${error}`)
        throw error;
    }
}
