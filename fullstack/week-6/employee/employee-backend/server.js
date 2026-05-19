import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./API/empApp.js";
import cors from "cors";

const app = exp();
//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    await connect("mongodb://24eg105a56_db_user:IINo1BSHic7mKxVC@ac-aloeyy4-shard-00-00.jceetle.mongodb.net:27017,ac-aloeyy4-shard-00-01.jceetle.mongodb.net:27017,ac-aloeyy4-shard-00-02.jceetle.mongodb.net:27017/?ssl=true&replicaSet=atlas-b2mfet-shard-0&authSource=admin&appName=Employee
");
    console.log("DB connected");
    app.listen(4000, () => console.log("server listening on port 4000.."));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
