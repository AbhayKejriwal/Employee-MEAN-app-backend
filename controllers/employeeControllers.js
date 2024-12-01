// controller functions
import { addEmployee, fetchAllEmployees, fetchEmployee, removeEmployee, updateEmployee } from "../services/employeeServices.js";

export const getAllEmployees = async (req, res) => {
    try{
        const employees = await fetchAllEmployees();
        res.status(200).json(employees);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const getEmployee = async (req, res) => {
    try {
        const employee = await fetchEmployee(req.params.id);
        if(!employee){
            return res.status(404).json({message: "Employee not found"});
        }
        return res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const postEmployee = async (req, res) => {
    try {
        const employee = await addEmployee(req.body);
        res.status(201).json({
            message: "Employee created",
            employee: employee
        });
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
};

export const putEmployee = async (req, res) => {
    try {
        const employee = await updateEmployee(req.params.id, req.body);
        if(!employee){
            return res.status(404).json({message: "Employee not found"});
        }
        res.status(200).json({
            message: "Employee updated",
            employee: employee
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const employee = await removeEmployee(req.params.id);
        if(!employee){
            return res.status(404).json({message: "Employee not found"});
        }
        res.status(200).json({
            message: "Employee deleted",
            employee: employee
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};