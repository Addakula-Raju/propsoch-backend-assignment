import { DataTypes, Model } from "sequelize";

class UserAddress extends Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
        },
        addressId: {
          type: DataTypes.INTEGER,
          references: {
            model: "Addresses",
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "UserAddress",
        tableName: "UserAddress",
      }
    );
  }

  static associate(models) {
    // future many-to-many logic
  }
}

export default UserAddress;