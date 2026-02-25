import { DataTypes, Model } from "sequelize";

class Address extends Model {
  static init(sequelize) {
    return super.init(
      {
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        neighborhood: DataTypes.STRING,
        country: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Address",
        tableName: "Addresses",
      }
    );
  }

  static associate(models) {
    // associations later
  }
}

export default Address;