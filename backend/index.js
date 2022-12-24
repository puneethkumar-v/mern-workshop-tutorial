// const express = require("express");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import Student from "./models/studentModel.js";

dotenv.config();
const app = express();

const PORT = 5000;
const DB_URL = process.env.DB_URL;


// Middleware Handling
app.use(bodyParser());
app.use(cors());




const createStudent = async (req, res) => {
    try {
        const studentInfo = req.body;
        const data = await Student.create(studentInfo);
        res.status(200).json(data);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

const getAllStudents = async (req, res) => {
    try {
        const studentsInfo = await Student.find({});
        res.status(200).json(studentsInfo);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}


app.get("/", getAllStudents);
app.post('/student', createStudent);

// Listening on the server
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set('strictQuery', false);