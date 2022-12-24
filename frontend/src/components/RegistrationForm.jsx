import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const RegistrationForm = () => {
  const baseURL = "http://www.localhost:5000";
  const initialState = {
    name: "",
    age: "",
    email: "",
    phone: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const postStudent = async (values) => {
    const { data } = await axios.post(`${baseURL}/student`, values);
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postStudent(values);
    setValues(initialState);
  };
  return (
    <div>
      <Box
        m="20px"
        sx={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "30rem",
            marginTop: "2rem",
            padding: "2rem",
            margin: "0 auto",
            borderRadius: "6px",
          }}
        >
          <h2>FORM</h2>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Name"
              onChange={handleChange}
              value={values.name}
              name="name"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="email"
              label="Email"
              onChange={handleChange}
              value={values.email}
              name="email"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Age"
              onChange={handleChange}
              value={values.age}
              name="age"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="tel"
              label="Phone"
              onChange={handleChange}
              value={values.phone}
              name="phone"
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="20px"
          >
            <Button
              type="submit"
              color="primary"
              variant="contained"
              sx={{
                padding: "10px 20px",
                width: "100%",
                fontSize: "16px",
                letterSpacing: "0.15rem",
                fontWeight: "bold",
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default RegistrationForm;
