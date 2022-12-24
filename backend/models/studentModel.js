import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    age: {type: Number, require: true},
    phone: {type: Number, require: true}
})

const Student = mongoose.model("Student", studentSchema);

export default Student;