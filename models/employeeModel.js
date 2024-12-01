import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        enum: ["Engineering", "HR", "Finance", "Marketing"],
        required: true
    },
    post: {
        type: String,
        enum: ["Manager", "Team Lead", "Software Developer", "Intern"],
        default: "Intern"
    },
    salary: {
        type: Number
    }
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;