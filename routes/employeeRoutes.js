// crud operation routes are defined here
import express from "express";
import { deleteEmployee, getAllEmployees, getEmployee, postEmployee, putEmployee } from "../controllers/employeeControllers.js";

const router = express.Router();

router.get("/:id", getEmployee);

router.get("/", getAllEmployees);

router.post("/", postEmployee);

router.put("/:id", putEmployee);

router.delete("/:id", deleteEmployee);

export default router;