import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const DisplayTable = () => {
  const baseURL = "http://www.localhost:5000";
  const [studentsData, setStudentsData] = useState([]);

  const getAllStudents = async (values) => {
    try {
      const { data } = await axios.get(`${baseURL}/`);
      setStudentsData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <>
      <h2 style={{ margin: "2rem 0" }}>Student's List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Sl NO</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsData.map((row, id) => (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DisplayTable;
