import express from "express";
import {
  createStudent,
  getStudents
} from "../controllers/StudentController.js";

const studentRouter = express.Router();

studentRouter.route("/student").post(createStudent);
studentRouter.route("/student").get(getStudents);

export default studentRouter;