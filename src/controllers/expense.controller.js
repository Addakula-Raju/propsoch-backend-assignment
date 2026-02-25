import * as Yup from "yup";
import Expense from "../models/Expense.js";
import { ValidationError } from "../utils/ApiError.js";

const expenseController = {
  add: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        description: Yup.string().required(),
        amount: Yup.number().required(),
        currency: Yup.string().required(),
        date: Yup.date().required(),
        paidByUserId: Yup.number().required()
      });

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      const expense = await Expense.create(req.body);

      return res.status(201).json(expense);
    } catch (error) {
      next(error);
    }
  }
};

export default expenseController;