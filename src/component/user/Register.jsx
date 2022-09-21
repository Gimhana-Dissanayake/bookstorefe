import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../module/user/userAction";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import { getUserRegisterPromise } from "../../module/user/userSelector";
import { useEffect } from "react";

const validationSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be of minimum 8 char length"),
});

const Register = () => {
  const registerPromise = useSelector(getUserRegisterPromise);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (registerPromise.isErrorOcurred) {
      enqueueSnackbar("Server error occured!", {
        variant: "error",
      });
    } else if (registerPromise.isFullfilled) {
      enqueueSnackbar("User Added successfully!", {
        variant: "success",
      });
      navigate("/login");
      //TODO:dispatch action to set register promise values
    }
  }, [registerPromise, enqueueSnackbar, navigate]);

  const registerForm = useFormik({
    validationSchema,
    initialValues: { email: "", password: "", name: "" },
    onSubmit: (values) => {
      dispatch(registerAction(values));
    },
  });

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <form autoComplete="off" noValidate onSubmit={registerForm.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={400}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        padding={5}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <Typography variant="h4" padding={3}>
          User Registration
        </Typography>

        <TextField
          id="name"
          name="name"
          variant="outlined"
          label="Enter username"
          value={registerForm.values.name}
          onChange={registerForm.handleChange}
          helperText={registerForm.touched.name && registerForm.errors.name}
          error={registerForm.touched.name && Boolean(registerForm.errors.name)}
          margin="normal"
        />
        <TextField
          id="email"
          name="email"
          variant="outlined"
          label="Enter email address"
          value={registerForm.values.email}
          onChange={registerForm.handleChange}
          helperText={registerForm.touched.email && registerForm.errors.email}
          error={
            registerForm.touched.email && Boolean(registerForm.errors.email)
          }
          margin="normal"
        />
        <TextField
          id="password"
          name="password"
          variant="outlined"
          label="Enter password"
          value={registerForm.password}
          onChange={registerForm.handleChange}
          helperText={
            registerForm.touched.password && registerForm.errors.password
          }
          error={
            registerForm.touched.password &&
            Boolean(registerForm.errors.password)
          }
          margin="normal"
        />

        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Register
        </Button>
        <Button sx={{ marginTop: 3, borderRadius: 3 }} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Register;
