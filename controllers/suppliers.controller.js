import { createSupplier, deleteSupplierById, getAllSuppliers, getSupplierById, updateSupplierByID } from "../services/suppliers.service.js";

export const createSupplierC = async (req, res) => {

    const {supplier_name, supplier_email} = req.body;

    try{
        const newSUpplier = await createSupplier(supplier_name,supplier_email); 
        return res.status(201).json({
            response: "Supplier has been created correctly"
        });
    }catch(error){
        res.status(500).json({
            response: error
        }); 
    }
}

export const getAlls = async (req, res) => {
    try{
        const suppliers = await getAllSuppliers(); 
        return res.status(200).json({
            response: suppliers.rows
        }); 
    }catch (error){
        res.status(500).json({
            response: error
        }); 
    }
}

export const getById = async (req, res) => {

    const { id } = req.params; 

    try{
        const getSupplier = await getSupplierById(id)
        return res.status(200).json({
            response: getSupplier
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
        const deleteSupplier = await deleteSupplierById(id); 
        return res.status(200).json({
            response: "Supplier has been eliminated correctly"
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export const updateById = async (req, res) => {
    const { id } = req.params; 
    const {supplier_name, supplier_email} = req.body; 

    try{
        const updateSupplier = await updateSupplierByID(id,supplier_name,supplier_email); 
        return res.status(200).json({
            response: "Supplier has been updated correctly"
        })
    }catch(error){
        res.status(500).json({
            response: error
        })
    }
}