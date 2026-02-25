import express from "express";
import { userRoutes } from "./user.routes.js";       // Added curly braces
import { loginRoutes } from "./login.routes.js";     // Added curly braces
import { addressRoutes } from "./address.routes.js"; // Added curly braces
import expenseRoutes from "./expense.routes.js";     // Keep this as is (it uses export default)

const router = express.Router();

router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/addresses", addressRoutes);
router.use("/expenses", expenseRoutes);

export default router;