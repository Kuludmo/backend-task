
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const projectRoutes = require("./Routes/projectRoutes");
const dbConfig = require("./config/db");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/projects/", projectRoutes);
dbConfig();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`${process.env.APP_NAME} running on port ${PORT}`);
});
