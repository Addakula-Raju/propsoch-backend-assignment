import { Router } from "express";
import expenseController from "../controllers/expense.controller.js";

const router = Router();

router.post("/", expenseController.add);

export default router;