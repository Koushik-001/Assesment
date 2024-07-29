require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connection established"))
  .catch(() => console.log("error1"));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
