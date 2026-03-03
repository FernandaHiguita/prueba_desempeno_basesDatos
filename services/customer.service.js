import { pool } from "../config/dbconfig.js";

//Send consult to postgres where you create a new customer 

export const createCustomer = async (customer_name, customer_email, customer_adress, customer_phone) => {
    
    const query = `INSERT INTO luisa_h_2.customers(customer_name, customer_email, customer_adress, customer_phone) VALUES ($1, $2, $3, $4) RETURNING customer_id, customer_name`;
    const values = [customer_name, customer_email, customer_adress, customer_phone]

    try {

        const response = await pool.query(query, values); 

        if(!response.rows[0]) {
            throw Error("Customer don't created"); 
        }
        return response; 
    }catch (error){
        console.error(`customer don't created: ${error}`);
        throw(error);  
    }
}

//Send consult to postgres where you get all customers

export const getAllCustomers = async () => {
    const query = `select * from luisa_h_2.customers`;

    try{
        const response = await pool.query(query); 

        if(!response.rows[0]){
            throw Error(`Can't show all customers`)
        }
        return response; 
    } catch(error){
        console.error(`Can't show all customers ${error}`)
        throw error; 
    }
}

//Send consult to postgres where you get a custumer  

export const getCustomerById =  async (id) => {
    const query = `select customer_name,customer_email from luisa_h_2.customers where customer_id =$1`; 
    const value = [id]; 

    try{

        const response = await pool.query(query, value); 

        if(response.rowCount === 0){
            throw Error(`Can't show a customer`)
        }

        return response; 
    }catch (error){
        console.error(`Can't show a customer ${error}`)
        throw error;
    }
}

//Send a consult where you delete a customer

export const deleteCustomerById = async (id) => {
    const query = `DELETE FROM luisa_h_2.customers where customer_id = $1`;
    const values = [id]; 

    try {
        const response = await pool.query(query, values)

        if(response.rowCount===0){
            throw Error('Customer has not eliminated'); 
        }
        return response; 
    }catch (error){
        console.error(`Can't delete a customer ${error}`)
        throw error;
    }
}

//Send a consult where you update a custumer

export const updateCostumerByID = async (id, customer_name, customer_email, customer_adress, customer_phone) => {
    const query = `UPDATE luisa_h_2.customers SET customer_name = $2, customer_email = $3, customer_adress = $4, customer_phone = $5 where customer_id = $1`; 
    const values = [id, customer_name, customer_email, customer_adress, customer_phone]

    try {
        const response = await pool.query(query, values)

        if(response.rowCount===0){
            throw Error('Customer has not updated'); 
        }
    }catch (error){
        console.error(`Can't update a customer ${error}`)
        throw error;
    }
}