import Employee from "../models/employeeModel.js";

// The following functions are used to interact with the database
export const fetchAllEmployees = async () => {
    return await Employee.find();
}

export const fetchEmployee = async (id) => {
    return await Employee.findById(id);
}

export const addEmployee = async (employee) => {
    return await Employee.create(employee);
}

export const updateEmployee = async (id, employee) => {
    return await Employee.findByIdAndUpdate(id, employee, {new: true});
}

export const removeEmployee = async (id) => {
    return await Employee.findByIdAndDelete(id);
}