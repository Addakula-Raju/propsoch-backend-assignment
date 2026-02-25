// src/index.js
import expressService from "./services/express.service";
import sequelizeService from "./services/sequelize.service";
import awsService from "./services/aws.service";

const services = [expressService, sequelizeService, awsService];

(async () => {
  for (const service of services) {
    await service.init();
  }
})();