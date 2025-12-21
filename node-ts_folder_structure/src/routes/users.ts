import express from "express";
import { GetAllUsers } from "../handler/users.js";

const router = express.Router();

router.get("/all", GetAllUsers);

export { router as userRouter };
