import { Sequelize } from "sequelize";
import config from "../config/config.js"; // fixed import path for ES module support
import fs from "fs";
import path from "path";

const modelFiles = fs
  .readdirSync(path.join(__dirname, "../models"))
  .filter((file) => file.endsWith(".js"));

const sequelizeService = {
  init: async () => {
    try {
      // ✅ Use config.development directly
      const connection = new Sequelize(
        config.development.database,
        config.development.username,
        config.development.password,
        {
          host: config.development.host,
          dialect: config.development.dialect,
        }
      );

      /*
        ✅ Load models dynamically
      */
      for (const file of modelFiles) {
        const model = await import(`../models/${file}`);
        model.default.init(connection);
      }

      // ✅ Set associations if defined
      for (const file of modelFiles) {
        const model = await import(`../models/${file}`);
        if (model.default.associate) {
          model.default.associate(connection.models);
        }
      }

      console.log("[SEQUELIZE] Database service initialized");
    } catch (error) {
      console.log("[SEQUELIZE] Error during database service initialization");
      throw error;
    }
  },
};

export default sequelizeService;