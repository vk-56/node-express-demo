import StudentModel from "../models/StudentModel.js";

const createStudent = async (req, res) => {
  let { name, email, mobile, subjects } = req.body;
  //   const oldStudent = await StudentModel.findOne({ mobile });
  const newStudent = await StudentModel.create({
    name,
    email,
    mobile,
    subjects,
  });

  if (newStudent) {
    res.status(201).json({
      _id: newStudent._id,
      name: newStudent.name,
      email: newStudent.email,
      mobile: newStudent.mobile,
      subjects: newStudent.subjects,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Student Data");
  }
};

const getStudents = async (req, res) => {
  const students = await StudentModel.find();
  if (students) {
    return res.status(200).json(students);
  } else {
    res.status(400);
    throw new Error("Invalid Request");
  }
};

export { createStudent, getStudents };