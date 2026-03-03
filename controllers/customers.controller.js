import { get } from "mongoose";
import { createCustomer, deleteCustomerById, getAllCustomers, getCustomerById, updateCostumerByID } from "../services/customer.service.js";

export const createCustomerC = async (req, res) => {

    const {customer_name, customer_email, customer_adress, customer_phone} = req.body;

    try{
        const newCustomer = await createCustomer(customer_name,customer_email,customer_adress,customer_phone); 
        return res.status(201).json({
            response: "Customer has been created correctly"
        });
    }catch(error){
        res.status(500).json({
            response: error
        }); 
    }
}

export const getAll = async(req, res) => {
    try{
        const customers = await getAllCustomers()
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
        const getCustumer = await getCustomerById(id)
        return res.status(200).json({
            response: getCustumer
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
        const deleteCustomer = await deleteCustomerById(id)
        return res.status(200).json({
            response: "Customer has been eliminated correctly"
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export const updateById = async (req, res) => {
    const { id } = req.params; 
    const {customer_name, customer_email, customer_adress, customer_phone} = req.body; 

    try{
        const updateCustomer = await updateCostumerByID(id,customer_name,customer_email,customer_adress,customer_phone); 
        return res.status(200).json({
            response: "Customer has been updated correctly"
        })
    }catch(error){
        res.status(500).json({
            response: error
        })
    }
}