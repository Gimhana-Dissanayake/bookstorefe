import React from "react";
import { Box } from "@mui/material";
import { TextField, Typography, Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../module/user/userAction";
import { getUserPromise } from "../../module/user/userSelector";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter you email")
    .email("Enter a valid email")
    .required("Email is requried"),
  password: yup
    .string("Enter you password")
    .min(8, "Password should be of minimum 8 char length")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const loginPromise = useSelector(getUserPromise);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginPromise.isErrorOcurred) {
      enqueueSnackbar("Username or password wrong!", {
        variant: "error",
      });
    } else if (loginPromise.isFullfilled) {
      enqueueSnackbar("Login Success", {
        variant: "success",
      });
      navigate("/");
    }
  }, [loginPromise, enqueueSnackbar, navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(loginAction(values.email, values.password));
    },
  });

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
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
        <Typography variant="h4" padding={3} textAlign="center">
          Book Store Login
        </Typography>
        <TextField
          name="email"
          id="email"
          data-testid="email-testid"
          label="Enter email address"
          variant="outlined"
          placeholder="Enter email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          helperText={formik.touched.email && formik.errors.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          margin="normal"
        />
        <TextField
          name="password"
          id="password"
          data-testid="password-testid"
          label="Enter password"
          variant="outlined"
          placeholder="Enter password"
          value={formik.values.password}
          onChange={formik.handleChange}
          helperText={formik.touched.password && formik.errors.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loginPromise.isPending}
          sx={{ marginTop: 3, borderRadius: 3 }}
        >
          Login
        </Button>
        <br />

        <Button sx={{ marginTop: 3, borderRadius: 3 }} onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </form>
  );
};

export default Login;
