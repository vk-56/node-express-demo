import express from "express";
import cors from "cors";
import connectDB from "./config/dbconnect.js";
import studentRouter from "./routes/StudentRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/hello", (req, res) => {
    res.send("This is a new API");
});

app.use("/api", studentRouter);

const PORT = 3011;
app.listen(PORT, () =>
  console.log(`Server running in on port ${PORT}`)
);