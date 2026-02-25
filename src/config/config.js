require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });

console.log("✅ DEBUG: DB_USER =", process.env.DB_USER);
console.log("✅ DEBUG: DB_PASS =", process.env.DB_PASS);
console.log("✅ DEBUG: DB_NAME =", process.env.DB_NAME);
console.log("✅ DEBUG: DB_HOST =", process.env.DB_HOST);
console.log("✅ DEBUG: DIALECT =", process.env.DB_DIALECT);

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
};