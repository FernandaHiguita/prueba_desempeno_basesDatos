import { pool } from "../config/dbconfig.js";

export const createSupplier = async (supplier_name, supplier_email) => {
    
    const query = `INSERT INTO luisa_h_2.suppliers(supplier_name, supplier_email) VALUES ($1, $2) RETURNING supplier_id, supplier_name`;
    const values = [supplier_name, supplier_email]

    try {

        const response = await pool.query(query, values); 

        if(!response.rows[0]) {
            throw Error("Supplier don't created"); 
        }
        return response; 
    }catch (error){
        console.error(`Supplier don't created: ${error}`);
        throw(error);  
    }
}

export const getAllSuppliers = async () => {
    const query = `select * from luisa_h_2.suppliers`;

    try{
        const response = await pool.query(query); 

        if(!response.rows[0]){
            throw Error(`Can't show all suppliers`)
        }
        return response; 
    } catch(error){
        console.error(`Can't show all suppliers ${error}`)
        throw error; 
    }
}

export const getSupplierById =  async (id) => {
    const query = `select * from luisa_h_2.suppliers where supplier_id=$1`; 
    const value = [id]; 

    try{

        const response = await pool.query(query, value); 

        if(response.rowCount === 0){
            throw Error(`Supplier has not exist`)
        }

        return response; 
    }catch (error){
        console.error(`Can't show a supplier ${error}`)
        throw error;
    }
}

export const deleteSupplierById = async (id) => {
    const query = `DELETE FROM luisa_h_2.suppliers where supplier_id = $1`;
    const values = [id]; 

    try {
        const response = await pool.query(query, values)

        if(response.rowCount===0){
            throw Error('Supplier has not exist'); 
        }
        return response; 
    }catch (error){
        console.error(`Can't delete a supplier ${error}`)
        throw error;
    }
}

export const updateSupplierByID = async (id, supplier_name, supplier_email) => {
    const query = `UPDATE luisa_h_2.suppliers SET supplier_name = $2, supplier_email = $3 where supplier_id = $1`; 
    const values = [id, supplier_name, supplier_email]

    try {
        const response = await pool.query(query, values)

        if(response.rowCount===0){
            throw Error('Supplier has not exist'); 
        }
    }catch (error){
        console.error(`Can't update a supplier ${error}`)
        throw error;
    }
}