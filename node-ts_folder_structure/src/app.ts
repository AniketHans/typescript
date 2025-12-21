import express from "express";
import { userRouter } from "./routes/users.js";
const app = express();

app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("Welcome ji Welcome");
});
app.listen(4000, () => {
  console.log("Listening at PORt 4000");
});
