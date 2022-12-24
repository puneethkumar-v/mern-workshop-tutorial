import Student from "../models/studentModel";


export const createStudent = async (req, res) => {
    try {
        const studentInfo = req.body;
        const data = await Student.create(studentInfo);
        console.log(data);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}
