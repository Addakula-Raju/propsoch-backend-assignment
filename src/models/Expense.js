import { DataTypes, Model } from "sequelize";

class Expense extends Model {
  static init(sequelize) {
    return super.init(
      {
        description: DataTypes.STRING,
        amount: DataTypes.FLOAT,
        currency: DataTypes.STRING,
        date: DataTypes.DATE,
        paidByUserId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "Expense",
        tableName: "Expenses",
      }
    );
  }

  static associate(models) {
    // future: Expense.belongsTo(models.User, { foreignKey: "paidByUserId" });
  }
}

export default Expense;