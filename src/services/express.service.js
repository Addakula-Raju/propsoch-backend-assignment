import express from "express";
import cors from "cors";
console.log("Importing routes...");
import routes from "../routes/index.js"; // ✅ FIXED PATH

const expressService = {
  app: null,

  init: async () => {
    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Routes
    app.use("/", routes);

    // Start server
    const port = process.env.SERVER_PORT || 3000;
    app.listen(port, () => {
      console.log(`[EXPRESS] Server listening on port ${port}`);
    });

    expressService.app = app;
    console.log("[EXPRESS] Express initialized");
  },
};

export default expressService;